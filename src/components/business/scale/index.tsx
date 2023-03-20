import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0
    }
}));

export default function ProjectEvaluatedScale({ isNotEditable }) {
    // 11个指标
    const [score, setScore] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>一级指标</StyledTableCell>
                        <StyledTableCell>二级指标</StyledTableCell>
                        <StyledTableCell>评价要素</StyledTableCell>
                        {!isNotEditable && <StyledTableCell align="center">得分</StyledTableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* 方案规范性 */}
                    <StyledTableRow>
                        <StyledTableCell component="th" scope="row" rowSpan={3}>
                            方案规范性（15分）
                        </StyledTableCell>
                        <StyledTableCell>完整性（5分）</StyledTableCell>
                        <StyledTableCell>
                            内容完整，论述清晰，论据充分，论证严谨，结论合理
                        </StyledTableCell>
                        {!isNotEditable && (
                            <StyledTableCell align="center">
                                <InputBase
                                    placeholder="请输入得分"
                                    sx={{
                                        borderBottom: '1px solid black',
                                        width: '100px'
                                    }}
                                    value={score[0]}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        let currentScore: number[] = [...score];
                                        currentScore[0] = parseInt(event.target.value);
                                        if (currentScore[0] > 5) {
                                            alert('分值不能大于5');
                                        } else if (Number.isNaN(currentScore[0])) {
                                            currentScore[0] = 0;
                                            setScore(currentScore);
                                        } else {
                                            setScore(currentScore);
                                        }
                                    }}
                                />
                            </StyledTableCell>
                        )}
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell>易读性（5分）</StyledTableCell>
                        <StyledTableCell>条理清晰，文字通畅，易读好懂</StyledTableCell>
                        {!isNotEditable && (
                            <StyledTableCell align="center">
                                <InputBase
                                    placeholder="请输入得分"
                                    sx={{
                                        borderBottom: '1px solid black',
                                        width: '100px'
                                    }}
                                    value={score[1]}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        let currentScore: number[] = [...score];
                                        currentScore[1] = parseInt(event.target.value);
                                        if (currentScore[1] > 5) {
                                            alert('分值不能大于5');
                                        } else if (Number.isNaN(currentScore[1])) {
                                            currentScore[1] = 0;
                                            setScore(currentScore);
                                        } else {
                                            setScore(currentScore);
                                        }
                                    }}
                                />
                            </StyledTableCell>
                        )}
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell>规范性（5分）</StyledTableCell>
                        <StyledTableCell>
                            语言和符号运用规范，格式美观，方案结构清晰
                        </StyledTableCell>
                        {!isNotEditable && (
                            <StyledTableCell align="center">
                                <InputBase
                                    placeholder="请输入得分"
                                    sx={{
                                        borderBottom: '1px solid black',
                                        width: '100px'
                                    }}
                                    value={score[2]}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        let currentScore: number[] = [...score];
                                        currentScore[2] = parseInt(event.target.value);
                                        if (currentScore[2] > 5) {
                                            alert('分值不能大于5');
                                        } else if (Number.isNaN(currentScore[2])) {
                                            currentScore[2] = 0;
                                            setScore(currentScore);
                                        } else {
                                            setScore(currentScore);
                                        }
                                    }}
                                />
                            </StyledTableCell>
                        )}
                    </StyledTableRow>
                    {/* 方案目的性 */}
                    <StyledTableRow>
                        <StyledTableCell component="th" scope="row" rowSpan={3}>
                            方案目的性（25分）
                        </StyledTableCell>
                        <StyledTableCell>问题剖析（10分）</StyledTableCell>
                        <StyledTableCell>
                            能够针对选择的任务情境进行深入、恰当且正确的分析，能够发现问题情境的核心要素和需要解决的关键问题
                        </StyledTableCell>
                        {!isNotEditable && (
                            <StyledTableCell align="center">
                                <InputBase
                                    placeholder="请输入得分"
                                    sx={{
                                        borderBottom: '1px solid black',
                                        width: '100px'
                                    }}
                                    value={score[3]}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        let currentScore: number[] = [...score];
                                        currentScore[3] = parseInt(event.target.value);
                                        if (currentScore[3] > 10) {
                                            alert('分值不能大于10');
                                        } else if (Number.isNaN(currentScore[3])) {
                                            currentScore[3] = 0;
                                            setScore(currentScore);
                                        } else {
                                            setScore(currentScore);
                                        }
                                    }}
                                />
                            </StyledTableCell>
                        )}
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell>问题需求（7分）</StyledTableCell>
                        <StyledTableCell>
                            能够满足问题情境中提出的需求，不跑题、不偏题
                        </StyledTableCell>
                        {!isNotEditable && (
                            <StyledTableCell align="center">
                                <InputBase
                                    placeholder="请输入得分"
                                    sx={{
                                        borderBottom: '1px solid black',
                                        width: '100px'
                                    }}
                                    value={score[4]}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        let currentScore: number[] = [...score];
                                        currentScore[4] = parseInt(event.target.value);
                                        if (currentScore[4] > 7) {
                                            alert('分值不能大于7');
                                        } else if (Number.isNaN(currentScore[4])) {
                                            currentScore[4] = 0;
                                            setScore(currentScore);
                                        } else {
                                            setScore(currentScore);
                                        }
                                    }}
                                />
                            </StyledTableCell>
                        )}
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell>预期效益（8分）</StyledTableCell>
                        <StyledTableCell>
                            提出的结论能够获得一定的预期成效，若加以实施，在特定的情境下或未来是能够收获成效的，而不是无意义、凭空设想的
                        </StyledTableCell>
                        {!isNotEditable && (
                            <StyledTableCell align="center">
                                <InputBase
                                    placeholder="请输入得分"
                                    sx={{
                                        borderBottom: '1px solid black',
                                        width: '100px'
                                    }}
                                    value={score[5]}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        let currentScore: number[] = [...score];
                                        currentScore[5] = parseInt(event.target.value);
                                        if (currentScore[5] > 8) {
                                            alert('分值不能大于8');
                                        } else if (Number.isNaN(currentScore[5])) {
                                            currentScore[5] = 0;
                                            setScore(currentScore);
                                        } else {
                                            setScore(currentScore);
                                        }
                                    }}
                                />
                            </StyledTableCell>
                        )}
                    </StyledTableRow>
                    {/* 方案科学性 */}
                    <StyledTableRow>
                        <StyledTableCell component="th" scope="row" rowSpan={3}>
                            方案科学性（45分）
                        </StyledTableCell>
                        <StyledTableCell>理论运用程度（15分）</StyledTableCell>
                        <StyledTableCell>
                            在方案中能够充分地体现复杂性理论的应用，能够合理地运用复杂性理论的知识与方法对问题进行剖析、提出方案与构想
                        </StyledTableCell>
                        {!isNotEditable && (
                            <StyledTableCell align="center">
                                <InputBase
                                    placeholder="请输入得分"
                                    sx={{
                                        borderBottom: '1px solid black',
                                        width: '100px'
                                    }}
                                    value={score[6]}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        let currentScore: number[] = [...score];
                                        currentScore[6] = parseInt(event.target.value);
                                        if (currentScore[6] > 15) {
                                            alert('分值不能大于15');
                                        } else if (Number.isNaN(currentScore[6])) {
                                            currentScore[6] = 0;
                                            setScore(currentScore);
                                        } else {
                                            setScore(currentScore);
                                        }
                                    }}
                                />
                            </StyledTableCell>
                        )}
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell>方案合理性（15分）</StyledTableCell>
                        <StyledTableCell>
                            设计的方案是科学、合理的，具有一定的可行性，在技术成熟、特定情境之下是能够实施的
                        </StyledTableCell>
                        {!isNotEditable && (
                            <StyledTableCell align="center">
                                <InputBase
                                    placeholder="请输入得分"
                                    sx={{
                                        borderBottom: '1px solid black',
                                        width: '100px'
                                    }}
                                    value={score[7]}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        let currentScore: number[] = [...score];
                                        currentScore[7] = parseInt(event.target.value);
                                        if (currentScore[7] > 15) {
                                            alert('分值不能大于15');
                                        } else if (Number.isNaN(currentScore[7])) {
                                            currentScore[7] = 0;
                                            setScore(currentScore);
                                        } else {
                                            setScore(currentScore);
                                        }
                                    }}
                                />
                            </StyledTableCell>
                        )}
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell>内容逻辑（15分）</StyledTableCell>
                        <StyledTableCell>
                            方案的问题剖析、方案提出与设想是逻辑清晰、缜密严谨的，方案的各部分各内容之间有紧密的逻辑关系，内容不是东拼西凑的
                        </StyledTableCell>
                        {!isNotEditable && (
                            <StyledTableCell align="center">
                                <InputBase
                                    placeholder="请输入得分"
                                    sx={{
                                        borderBottom: '1px solid black',
                                        width: '100px'
                                    }}
                                    value={score[8]}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        let currentScore: number[] = [...score];
                                        currentScore[8] = parseInt(event.target.value);
                                        if (currentScore[8] > 15) {
                                            alert('分值不能大于15');
                                        } else if (Number.isNaN(currentScore[8])) {
                                            currentScore[8] = 0;
                                            setScore(currentScore);
                                        } else {
                                            setScore(currentScore);
                                        }
                                    }}
                                />
                            </StyledTableCell>
                        )}
                    </StyledTableRow>
                    {/* 方案创新性 */}
                    <StyledTableRow>
                        <StyledTableCell component="th" scope="row" rowSpan={2}>
                            方案创新性（15分）
                        </StyledTableCell>
                        <StyledTableCell>实践创新性（8分）</StyledTableCell>
                        <StyledTableCell>方案在实践层面具有一定的创新价值</StyledTableCell>
                        {!isNotEditable && (
                            <StyledTableCell align="center">
                                <InputBase
                                    placeholder="请输入得分"
                                    sx={{
                                        borderBottom: '1px solid black',
                                        width: '100px'
                                    }}
                                    value={score[9]}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        let currentScore: number[] = [...score];
                                        currentScore[9] = parseInt(event.target.value);
                                        if (currentScore[9] > 8) {
                                            alert('分值不能大于8');
                                        } else if (Number.isNaN(currentScore[9])) {
                                            currentScore[9] = 0;
                                            setScore(currentScore);
                                        } else {
                                            setScore(currentScore);
                                        }
                                    }}
                                />
                            </StyledTableCell>
                        )}
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell>理念创新性（7分）</StyledTableCell>
                        <StyledTableCell>方案在理念、设想上具有一定的创意</StyledTableCell>
                        {!isNotEditable && (
                            <StyledTableCell align="center">
                                <InputBase
                                    placeholder="请输入得分"
                                    sx={{
                                        borderBottom: '1px solid black',
                                        width: '100px'
                                    }}
                                    value={score[10]}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        let currentScore: number[] = [...score];
                                        currentScore[10] = parseInt(event.target.value);
                                        if (currentScore[10] > 7) {
                                            alert('分值不能大于7');
                                        } else if (Number.isNaN(currentScore[10])) {
                                            currentScore[10] = 0;
                                            setScore(currentScore);
                                        } else {
                                            setScore(currentScore);
                                        }
                                    }}
                                />
                            </StyledTableCell>
                        )}
                    </StyledTableRow>
                    {/* 总得分 */}
                    {!isNotEditable && (
                        <StyledTableRow>
                            <StyledTableCell
                                sx={{
                                    color: 'steelblue',
                                    fontWeight: 'bold',
                                    fontSize: '1.1rem !important'
                                }}
                                colSpan={3}
                            >
                                总得分
                            </StyledTableCell>
                            <StyledTableCell
                                sx={{
                                    color: 'steelblue',
                                    fontWeight: 'bold',
                                    fontSize: '1.1rem !important'
                                }}
                                align="center"
                            >
                                {score[0] +
                                    score[1] +
                                    score[2] +
                                    score[3] +
                                    score[4] +
                                    score[5] +
                                    score[6] +
                                    score[7] +
                                    score[8] +
                                    score[9] +
                                    score[10]}
                            </StyledTableCell>
                        </StyledTableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
