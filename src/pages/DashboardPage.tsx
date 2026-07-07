import Chart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';

const headcountSeries = [
  { name: 'Engineering', data: [42, 44, 48, 51, 55, 58] },
  { name: 'Operations', data: [28, 29, 30, 31, 33, 34] },
];

const headcountOptions: ApexOptions = {
  chart: { type: 'area', toolbar: { show: false }, foreColor: '#cbd5e1' },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 2 },
  xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
  colors: ['#22d3ee', '#818cf8'],
  grid: { borderColor: '#1e293b' },
};

const turnoverOptions: ApexOptions = {
  chart: { type: 'bar', toolbar: { show: false }, foreColor: '#cbd5e1' },
  plotOptions: { bar: { borderRadius: 6, columnWidth: '45%' } },
  xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'] },
  colors: ['#f59e0b'],
  grid: { borderColor: '#1e293b' },
};

const metrics = [
  { label: 'Active employees', value: '128', delta: '+6.2%' },
  { label: 'Open positions', value: '14', delta: '-2 roles' },
  { label: 'Avg. time to hire', value: '23d', delta: '-4d' },
  { label: 'Retention rate', value: '94%', delta: '+1.1%' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold">People analytics overview</h2>
        <p className="mt-2 max-w-2xl text-slate-400">
          Executive dashboard for workforce planning, hiring funnel health, and department growth trends.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-lg shadow-black/20"
          >
            <p className="text-sm text-slate-400">{metric.label}</p>
            <p className="mt-2 text-3xl font-bold">{metric.value}</p>
            <p className="mt-2 text-sm text-cyan-400">{metric.delta}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h3 className="mb-4 text-lg font-semibold">Headcount trend</h3>
          <Chart options={headcountOptions} series={headcountSeries} type="area" height={300} />
        </article>
        <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h3 className="mb-4 text-lg font-semibold">Quarterly turnover</h3>
          <Chart
            options={turnoverOptions}
            series={[{ name: 'Turnover %', data: [8.2, 7.5, 6.9, 6.1] }]}
            type="bar"
            height={300}
          />
        </article>
      </section>
    </div>
  );
}
