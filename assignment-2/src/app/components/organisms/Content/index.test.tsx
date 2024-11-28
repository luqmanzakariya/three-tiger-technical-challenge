import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Content from "@/app/components/organisms/Content";

describe("Content Component", () => {
  afterEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const originalFetch = global.fetch;
  });

  const mockTodos = [
    {
      id: 1,
      category: "work",
      task: "Finish Firebase API",
      createdAt: "2024-10-30T10:30:00.000Z",
      completed: false,
    },
    {
      id: 2,
      category: "personal",
      task: "Buy groceries",
      createdAt: "2024-10-28T08:00:00.000Z",
      completed: false,
    },
    {
      id: 3,
      category: "work",
      task: "Send email to client",
      createdAt: "2024-10-29T14:15:00.000Z",
      completed: false,
    },
  ];

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockTodos),
    })
  );

  it("renders FilterMolecules and Card components", async () => {
    render(<Content />);

    // Wait for API data to load
    await waitFor(() => {
      expect(screen.getByText("Finish Firebase API")).toBeInTheDocument();
    });

    // Check FilterMolecules
    expect(screen.getByText("Filter:")).toBeInTheDocument();

    // Check that all tasks are displayed initially
    const cards = screen.getAllByTestId("todo");
    expect(cards).toHaveLength(3); // Matches the mocked data length
  });

  it("filters tasks by category when a filter is applied", async () => {
    render(<Content />);

    // Wait for API data to load
    await waitFor(() => {
      expect(screen.getByText("Buy groceries")).toBeInTheDocument();
    });

    // Click on the "personal" filter
    const personalFilter = screen.getByTestId("personal");
    fireEvent.click(personalFilter);

    // Check that only "personal" tasks are displayed
    await waitFor(() => {
      const personalTasks = screen.getAllByText(/Buy groceries/);
      expect(personalTasks).toHaveLength(1);
    });

    // Check that "Finish Firebase API" (work category) is not displayed
    expect(screen.queryByText("Finish Firebase API")).not.toBeInTheDocument();
  });

  it("displays all tasks when the 'all' filter is applied", async () => {
    render(<Content />);

    // Wait for API data to load
    await waitFor(() => {
      expect(screen.getByText("Send email to client")).toBeInTheDocument();
    });

    // Click on the "all" filter
    const allFilter = screen.getByTestId("all");
    fireEvent.click(allFilter);

    // Check that all tasks are displayed
    await waitFor(() => {
      const cards = screen.getAllByTestId("todo");
      expect(cards).toHaveLength(3); // Matches the mocked data length
    });
  });
});