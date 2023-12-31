import React, { useEffect, useState } from 'react';
// mui5
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

interface CustomTableProps {
    /** 表格每一列的说明 */
    columns: any;
    /** 表格数据 */
    rows: any;
    /** 表格是否有操作按钮 */
    hasActions?: any;
    /** 是否需要详情action */
    needAction?: boolean;
    /** 详情action的function */
    openDetail?: (id: any) => void;
    /** 将内容渲染为chip小标签, 输入需要渲染为tag标签的列id, 同时要求需要渲染tag的那一列的数据是对象数组[{}], 对象字段为{label, color} */
    // TODO: 目前仅支持对一列进行处理, 暂不考虑多列
    renderTags?: any;
    /** 表格整体样式 */
    sx?: any;
}

const CustomTable: React.FC<CustomTableProps> = ({
    columns,
    rows,
    hasActions,
    needAction = false,
    openDetail,
    renderTags,
    sx
}) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {
        setPage(0);
    }, [rows]);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Box>
            <TableContainer
                sx={{
                    borderTopLeftRadius: '5px',
                    borderTopRightRadius: '5px',
                    overflow: 'overlay',
                    '&::-webkit-scrollbar': {
                        width: 5,
                        height: 5
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#a4b7c670',
                        borderRadius: '4px'
                    },
                    ...sx
                }}
            >
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
                                        color: 'white',
                                        fontWeight: 'bold',
                                        zIndex: 0
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                            {(hasActions || needAction) && (
                                <TableCell
                                    align="center"
                                    sx={{
                                        backgroundColor: 'steelblue',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        zIndex: 0
                                    }}
                                >
                                    操作
                                </TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row: any) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.id}
                                        sx={{ '& td': { p: hasActions ? '8px' : '13px' } }}
                                    >
                                        {columns.map((column: any) => {
                                            const value = row[column.id];
                                            if (column.id === renderTags) {
                                                const RenderChips = () => {
                                                    return (
                                                        <>
                                                            {value?.map((tag, index) => (
                                                                <Chip
                                                                    key={index}
                                                                    color="secondary"
                                                                    size="small"
                                                                    label={tag}
                                                                    sx={{ mr: 1 }}
                                                                />
                                                            ))}
                                                        </>
                                                    );
                                                };

                                                return (
                                                    <TableCell key={column.id} align="left">
                                                        <RenderChips />
                                                    </TableCell>
                                                );
                                            } else {
                                                return (
                                                    <TableCell key={column.id} align="left">
                                                        {value}
                                                    </TableCell>
                                                );
                                            }
                                        })}
                                        {hasActions && (
                                            <TableCell align="center">{hasActions}</TableCell>
                                        )}
                                        {needAction && (
                                            <TableCell align="center">
                                                <Button
                                                    size="small"
                                                    variant="outlined"
                                                    onClick={() => {
                                                        if (openDetail) {
                                                            openDetail(row['id']);
                                                        }
                                                    }}
                                                >
                                                    详情
                                                </Button>
                                            </TableCell>
                                        )}
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
                    minHeight: '40px !important',
                    borderBottomLeftRadius: '5px',
                    borderBottomRightRadius: '5px'
                }}
            />
        </Box>
    );
};

export default CustomTable;
