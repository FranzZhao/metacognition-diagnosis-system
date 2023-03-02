import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface CustomTableProps {
    columns: any;
    rows: any;
}

const CustomTable: React.FC<CustomTableProps> = ({ columns, rows }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Box>
            <TableContainer sx={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow
                            sx={{
                                '& th': { p: '12px' }
                            }}
                        >
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align="left"
                                    style={{
                                        minWidth: column.minWidth,
                                        backgroundColor: 'steelblue',
                                        color: 'white'
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                            <TableCell
                                align="center"
                                sx={{
                                    backgroundColor: 'steelblue',
                                    color: 'white'
                                }}
                            >
                                操作
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.id}
                                        sx={{ '& td': { p: '8px' } }}
                                    >
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align="left">
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                        <TableCell align="center">
                                            <Button size="small" variant="outlined">
                                                详情
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 20]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{
                    bgcolor: 'grey',
                    minHeight: '40px !important'
                }}
            />
        </Box>
    );
};

export default CustomTable;
