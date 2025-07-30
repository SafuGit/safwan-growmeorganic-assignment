import { ChevronsDown } from 'lucide-react';
import Table from './components/Table';

function App() {
  return (
    <div className="font-segoe">
      <h1 style={{
        fontWeight: '500',
        marginTop: '1rem',
        marginBottom: '0.2rem',
      }}>GrowMeOrganic Private Ltd. Assignment - Done by Safwan Sadid</h1>
      <h2 style={{
        fontWeight: 'normal',
        marginTop: '0',
        marginBottom: '1rem',
      }}>Scroll down for pagination <ChevronsDown></ChevronsDown></h2>
      <Table></Table>
    </div>
  )
}

export default App;
