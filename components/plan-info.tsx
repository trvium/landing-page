"use client"

import React from 'react';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

export default function PlanInfo(data: any) {
  const userPlanType = data.info.planType;
  const userPlanLimit = data.info.planLimit;
  const userPlanUsed = data.info.planUsed;

  const chartData = {
    datasets: [
      {
        data: [userPlanUsed, userPlanLimit - userPlanUsed],
        backgroundColor: ['#6C63FF', '#E4E7EB'],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    cutout: '80%',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white rounded-md shadow-lg w-full h-auto p-10 flex flex-col items-center">
      <div className="mb-4">
        <span className="text-xl font-medium">Plan: </span>
        <span className="text-xl font-semibold">{userPlanType}</span>
      </div>
      <div className="mb-4">
        <Doughnut data={chartData} options={chartOptions} />
      </div>
      
      <div className="text-center">
        <span className="text-xl font-medium">Plan Used: </span>
        <span className="text-xl ml-auto font-semibold">{userPlanUsed}</span>
        <span className="text-xl font-medium"> / {userPlanLimit}</span>
      </div>
      <a href="/billing">
        <button className="mt-4 px-4 py-2 rounded-md bg-purple-300 text-white hover:bg-purple-400">
          Change plan
        </button>
      </a>
    </div>
  );
}
