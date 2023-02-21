import React from 'react';
// mui5
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import bot1 from '../../../assets/img/ai.png';
// import bot2 from '../../../assets/img/bot.png';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const AgentCard = () => {
    const theme = useTheme();

    return (
        <Avatar
            src={bot1}
            sx={{
                position: 'fixed',
                right: '15px',
                width: '35px',
                height: '35px',
                bgcolor: theme.palette.secondary.main,
                '& img': {
                    width: '25px',
                    height: '25px'
                }
            }}
        />
    );
    // return (
    //     <Card
    //         sx={{
    //             width: '450px',
    //             position: 'fixed',
    //             right: '15px',
    //             bgcolor: '#252a38e3',
    //             color: '#fff',
    //             boxShadow: '0px 0px 20px #181818',
    //             filter: 'blur(18)'
    //         }}
    //     >
    //         <CardHeader
    //             avatar={
    //                 <Avatar
    //                     src={bot1}
    //                     sx={{
    //                         width: '35px',
    //                         height: '35px',
    //                         bgcolor: theme.palette.secondary.main,
    //                         '& img': {
    //                             width: '25px',
    //                             height: '25px'
    //                         }
    //                     }}
    //                 />
    //             }
    //             title={
    //                 <Typography
    //                     fontWeight="bold"
    //                     fontSize="1.1rem"
    //                     color={theme.palette.secondary.light}
    //                 >
    //                     Anduril
    //                 </Typography>
    //             }
    //             action={
    //                 <IconButton
    //                     size="small"
    //                     sx={{
    //                         maxWidth: '24px',
    //                         maxHeight: '24px'
    //                     }}
    //                 >
    //                     <RemoveCircleOutlineIcon
    //                         sx={{
    //                             color: theme.palette.grey[300],
    //                             fontSize: '18px'
    //                         }}
    //                     />
    //                 </IconButton>
    //             }
    //             sx={{
    //                 mt: '5px',
    //                 height: '50px'
    //             }}
    //         />
    //         <CardContent
    //             sx={{
    //                 mb: '10px',
    //                 pt: '0px',
    //                 height: '105px',
    //                 overflowY: 'overlay',
    //                 '&::-webkit-scrollbar': {
    //                     width: 5
    //                 },
    //                 '&::-webkit-scrollbar-thumb': {
    //                     background: '#a4b7c670',
    //                     borderRadius: '4px'
    //                 }
    //             }}
    //         >
    //             学习提示：在进行学习计划之前，首选需要确定自己已经掌握的知识有哪些，已经具备什么能力。接着思考这样的能力和知识能够帮助自己如何学习。最后确定自己希望通过这样的学习了解到什么、解决什么问题。记住，确定完目标不是计划的结束，你还需要在做的过程中反复思考自己的目标是否合适、是否需要调整。
    //         </CardContent>
    //         <CardActions>
    //             <Button
    //                 variant="text"
    //                 size="small"
    //                 color="secondary"
    //                 disableElevation
    //                 sx={{ ml: 'auto' }}
    //             >
    //                 取消
    //             </Button>
    //             <Button variant="contained" size="small" color="secondary" disableElevation>
    //                 确认
    //             </Button>
    //         </CardActions>
    //     </Card>
    // );
};

export default AgentCard;
