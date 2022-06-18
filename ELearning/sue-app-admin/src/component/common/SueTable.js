
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export function SueTable(props) {

    const {headers, rows} = props;
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {headers.map((header,index) => <TableCell align="center" key={index}> {header} </TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {headers.map(header => <TableCell align="center" key={header}> {row[header]} </TableCell>)}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}