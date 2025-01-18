import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function Home() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 h-screen w-screen gap-4 p-4">
      <div className="bg-gray-100 flex items-center justify-center rounded-lg shadow-lg p-4 col-span-2">
        <Line
          data={{
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            datasets: [
              {
                label: "Spending",
                data: [
                  1200, 1500, 1800, 2000, 1700, 1600, 1900, 2100, 2200, 2300,
                  2400, 2500,
                ],
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
              {
                label: "Earning",
                data: [
                  2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800,
                  4000, 4200,
                ],
                borderColor: "rgb(255, 99, 132)",
                tension: 0.1,
              },
            ],
          }}
          options={{
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
      <div className="bg-gray-100 flex items-center justify-center rounded-lg shadow-lg p-4">
        <Bar
          data={{
            labels: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            datasets: [
              {
                label: "Expenses",
                data: [3000, 5000, 4000, 7000, 6000, 4500, 9000],
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>
      <div className="bg-gray-100 flex items-center justify-center rounded-lg shadow-lg p-4">
        <Pie
          data={{
            labels: ["Facebook", "Instagram", "Twitter", "LinkedIn", "YouTube"],
            datasets: [
              {
                label: "Time spent",
                data: [20, 15, 10, 5, 30],
                backgroundColor: [
                  "rgb(255, 99, 132, 0.9)",
                  "rgb(54, 162, 235, 0.9)",
                  "rgb(255, 205, 86, 0.9)",
                  "rgb(75, 192, 192, 0.9)",
                  "rgb(153, 102, 255, 0.9)",
                  "rgb(201, 203, 207, 0.9)",
                ],
                borderWidth: 1,
                hoverOffset: 4,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default Home;
