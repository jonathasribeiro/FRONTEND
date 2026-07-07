import { useForm } from 'react-hook-form';

type EmployeeForm = {
  fullName: string;
  role: string;
  department: string;
};

const employees = [
  { name: 'Ana Souza', role: 'Staff Engineer', department: 'Engineering', status: 'Active' },
  { name: 'Bruno Lima', role: 'Product Manager', department: 'Product', status: 'Active' },
  { name: 'Carla Mendes', role: 'People Partner', department: 'HR', status: 'On leave' },
];

export default function EmployeesPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmployeeForm>();

  const onSubmit = (data: EmployeeForm) => {
    console.info('Employee draft saved', data);
    reset();
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-semibold">Employee directory</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-800 text-slate-400">
              <tr>
                <th className="px-3 py-2">Name</th>
                <th className="px-3 py-2">Role</th>
                <th className="px-3 py-2">Department</th>
                <th className="px-3 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.name} className="border-b border-slate-800/70">
                  <td className="px-3 py-3">{employee.name}</td>
                  <td className="px-3 py-3">{employee.role}</td>
                  <td className="px-3 py-3">{employee.department}</td>
                  <td className="px-3 py-3 text-cyan-400">{employee.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-semibold">Add employee</h2>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="mb-1 block text-sm text-slate-400">Full name</label>
            <input
              {...register('fullName', { required: 'Name is required' })}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
            />
            {errors.fullName && <p className="mt-1 text-xs text-red-400">{errors.fullName.message}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm text-slate-400">Role</label>
            <input
              {...register('role', { required: 'Role is required' })}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
            />
            {errors.role && <p className="mt-1 text-xs text-red-400">{errors.role.message}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm text-slate-400">Department</label>
            <input
              {...register('department', { required: 'Department is required' })}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
            />
            {errors.department && <p className="mt-1 text-xs text-red-400">{errors.department.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-950"
          >
            Save draft
          </button>
        </form>
      </section>
    </div>
  );
}
