import React from 'react';

export default function PlanInfo(data: any) {
  const userPlanType = data.info.plan_type;
  const userPlanLimit = data.info.plan_limit;
  const userPlanUsed = data.info.plan_used;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-20" data-aos="fade-up" data-aos-delay="50">
      <div className="bg-white rounded-md p-4 shadow-lg">
        <div className="flex items-center mb-4">
          <span className="text-xl font-medium">Plan:</span>
          <span className="ml-auto font-bold">{userPlanType}</span>
        </div>
        <div className="flex items-center mb-4">
          <span className="text-xl font-medium">Plan Limit:</span>
          <span className="ml-auto font-bold">{userPlanLimit}</span>
        </div>
        <div className="flex items-center mb-4">
          <span className="text-xl font-medium">Plan Used:</span>
          <span className="ml-auto font-bold">{userPlanUsed}</span>
        </div>
        <a href="/billing">
          <button className="mt-4 px-4 py-2 rounded-md bg-purple-300 text-white hover:bg-purple-400">Change plan</button>
        </a>
      </div>
    </div>
  );
}
