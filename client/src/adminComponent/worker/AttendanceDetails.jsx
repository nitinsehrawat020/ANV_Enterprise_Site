import styled from "styled-components";

const StyleattendanceDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 0.3rem;
  padding: 1rem;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 1;
    border: 2px solid var(--color-background-800);
  }
  thead tr {
    text-align: center;
    padding: 1rem 1rem;
    background-color: var(--color-background-800);
    border: 1px solid var(--color-background-800);
  }
  thead th {
    text-align: center;
    padding: 1rem 1rem;
    background-color: var(--color-background-300);
    border: 1px solid var(--color-background-800);
  }
  tr:nth-child(even) {
    background-color: var(--color-background-800);
  }
  tr:nth-child(even) {
    background-color: var(--color-background-800);
  }
  td {
    text-align: center;
    padding: 0.7rem;
    border: 1px solid var(--color-background-500);
    font-size: 0.8rem;
  }
`;
const TableContainer = styled.div`
  overflow: auto;
  scrollbar-width: 1px;
  &::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;

function AttendanceDetails({ worker }) {
  const attendanceData = Object.entries(worker.attendance).map(
    ([date, details]) => ({
      date,
      value: typeof details === "object" ? details.value : details,
      site: details.site,
    })
  );

  return (
    <StyleattendanceDetails>
      <h2>Attendance Details</h2>
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Value</th>
              <th>Site</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((data) => (
              <tr key={data.date}>
                <td>{data.date}</td>
                <td>{data.value}</td>
                <td>{data.site}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableContainer>
    </StyleattendanceDetails>
  );
}

export default AttendanceDetails;
