
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { day: 0, memory: 100, review: 100 },
  { day: 1, memory: 60, review: 100 },
  { day: 2, memory: 45, review: 95 },
  { day: 3, memory: 35, review: 100 },
  { day: 7, memory: 20, review: 90 },
  { day: 14, memory: 10, review: 85 },
  { day: 30, memory: 5, review: 80 },
];

const ForgettingCurveChart: React.FC = () => {
  return (
    <div className="w-full h-64 md:h-80 bg-white p-4 rounded-xl shadow-inner mt-4">
      <h4 className="text-center text-gray-600 mb-2 font-bold">منحنى النسيان (Forgetting Curve)</h4>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" label={{ value: 'الأيام', position: 'insideBottom', offset: -5 }} />
          <YAxis label={{ value: 'التذكر %', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend verticalAlign="top" height={36}/>
          <Line
            type="monotone"
            dataKey="memory"
            stroke="#ef4444"
            name="بدون مراجعة"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="review"
            stroke="#10b981"
            name="مع تكرار متباعد"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForgettingCurveChart;
