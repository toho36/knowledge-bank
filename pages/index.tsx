import { Box } from '@mui/material';

import Main from '../components/Main';
import SingleClickEditing from '../components/DataGrid';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <main>
      <Main />
      <SingleClickEditing></SingleClickEditing>
      <Projects />
    </main>
  );
}
