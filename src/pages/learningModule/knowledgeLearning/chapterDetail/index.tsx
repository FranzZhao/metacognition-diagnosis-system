import React from 'react';
// mui5
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const ChapterDetail = () => {
    return (
        <Paper variant="outlined" sx={{ mt: 2, p: '20px 30px', '& *': { lineHeight: '27px' } }}>
            <Typography variant="h5" fontWeight="bold">
                第一节 技术支持下的学习
            </Typography>
            <Typography variant="h6" fontWeight="bold" margin="10px 0">
                1.1 简介
            </Typography>
            <Typography variant="body1">
                对于技术，人们有浪漫的看法，认为只要它出现在学习中便会促进学生的学习和学业成就；有的人也认为这仅仅是浪费时间。但是，许多研究小组通过分析和研究后得出，只要适当地运用技术，技术在提高学生学业成就和促进教师学习上具有巨大潜力（Dede,1998;
                范比特大学认知与技术小组,1996）。
            </Typography>
            <Typography variant="body1">
                由于许多新技术都具有交互性，因而我们可以更容易地创设教学环境，并让学生在这种环境中通过实践来学习、获得反馈和不断地改进他们的理解以及建构新知识（Barron
                et al. , 1998）。本章将从以下五个方面入手分析新技术的应用：
            </Typography>
            <Typography variant="body1">① 将真实世界的问题引入课堂；</Typography>
            <Typography variant="body1">② 提供促进学习的支架和工具；</Typography>
            <Typography variant="body1">③ 给学生和教师提供更多的反馈、反思和修改机会；</Typography>
            <Typography variant="body1">
                ④
                建立包括教师、管理人员、学生、家长、实践科学家和其他有兴趣的人在内的本地共同体和全球共同体；
            </Typography>
            <Typography variant="body1">⑤ 拓展教师的学习机会。</Typography>

            <Typography variant="h6" fontWeight="bold" margin="10px 0">
                1.2 将真实世界的问题引入课堂
            </Typography>
            <Typography variant="body1">
                技术的一个重要用途就是它能够为课堂和教学创造新机会，通过把真实世界的问题带入课堂，让学生进行探索和解决，让学生不仅可以解决问题，还可以发现自己的问题。这种通过真实世界的情境学习并不是一个新观念，但是这些活动很少成为学校教学的核心，最主要的问题是这些活动涵盖了多门学科的内容，而且通常需要更长的学习周期，很难融入已有的学校教学模式之中。其中一种方式是运用技术创造问题解决的学习环境，如基于视频的难题思考、计算机模拟等，典型的案例如范德比尔特大学认知与技术小组开发的贾斯珀计划。这种学习环境能够让学习者充分地与环境进行交互，以此探究情境、检验观点并接受反馈。像线性录像带一样的非交互式学习环境就不太利于创建能够让学生以独立或协作的方式进行探索和复查的情境
            </Typography>
            <Typography variant="body1">
                另一种将真实世界问题引入课堂的方法，是将学生与一线开展研究的科学家联系起来（Cohen，1997）。学生们通过互联网与远处的科学家、其他地区的学生教师一同参与学习和探究。例如，全球实验室（GlobalLab）支持一个由来自30个国家超过200所学校的学生研究者组成的国际性共同体，就本地或全球的环境来建构新知识（Tinker&
                Berenfeld,1993）。全球实验室的学生开展了诸如空气、水污染、文化现象、语言艺术等方面的研究和探讨。
            </Typography>
            <Typography variant="body1">
                由于教育的最终目的是帮助学生成为有能力的成人和**终身学习者**，因此我们有充分的理由借助信息技术的方法将学生与同伴、学生与实践专业工作者连接起来。运用技术为这种虚拟的学习共同体提供媒介。
            </Typography>

            <Typography variant="h6" fontWeight="bold" margin="10px 0">
                1.3 支架和工具
            </Typography>
            <Typography variant="body1">
                当前教育面临的挑战是如何设计用于学习的技术。这些设计使技术来支持思维和活动，好比年幼的孩子学单车需要练习轮子，否则没有支撑他们就会摔下来。计算机搭建的支架允许学习者开展更高级的活动，参与更高级的思维和问题解决活动，如果没有支架的帮助，就无法收到这样的效果。
            </Typography>
            <Typography variant="body1">
                一种是认知学徒模型（apprenticeship
                model），首先让学习者观察专家级从业者的示范行为，然后为学习者搭建支架（提供建议和示例），接着引导学习者实践操作，逐渐减少支持和引导，知道学徒能够独立工作（Collins
                et al. , 1989）。
            </Typography>
            <Typography variant="body1">
                另一种是运用新技术以新的方式表征数据或各类现象，并基于此开展探究活动，这类方法可以称为计算机模拟方法。如MIT开发的基于系统动力学的STELIA模型环境便被运用在人口生态学、历史等学科领域的学习之中。还有的如遗传学中的生物模型模拟。
            </Typography>
            <Typography variant="body1">
                综上，大概基于技术的工具被整合到课程与问题解决中，并与有关学习的知识配合使用时，这些工具便能够增强学习者的行为表现，因此需要是技术成为教学方法中有机的组成部分。
            </Typography>

            <Typography variant="h6" fontWeight="bold" margin="10px 0">
                1.4 反馈、反思与修正
            </Typography>
            <Typography variant="body1">
                技术使教师更容易对学生的思考给予反馈，技术也使学生更容易修改他们的作业。例如贾斯珀计划系统中，便设计了反馈设计功能，让就教师预先设定好反馈内容，在学生给出问题的解决方案之后，根据预设的情况分析学生的方案需要基于哪些反馈，系统便会即时对学生提出的方法做出清晰迅速的反应。
                同时需要注意到，同伴是反馈的最佳来源。计算机支持的协作学习（CSCL）便极为强调这种社会交互的重要性。
                运用技术的另一个优点便是思维可视化。系统通过鼓励学习者说明他们在思维过程中所采取的步骤，软件为此建立一个思维记录，学习者可以查看思维记录来反思自己的学习，而教师可以用思维记录来评估学生的发展情况，并及时发展学生存在的思维漏洞。
                智能导学系统、认知导师也是支持学习者开展反思调节的有效工具。通过把专家模型、学生模型和驱动系统的教学模型进行融合，以此构建针对不同学习者的一对一反馈式教学。
            </Typography>

            <Typography variant="h6" fontWeight="bold" margin="10px 0">
                1.5 将课堂和社区联系在一起
            </Typography>
            <Typography variant="body1">
                现代技术有利于在在校学生和校外活动之间建立联系。运用互联网将家长与学校联系起来，将孩子在学校中的表现、作业、进步情况、能力情况等发送给家长，通过联合家校以促进孩子更好的发展。
            </Typography>

            <Typography variant="h6" fontWeight="bold" margin="10px 0">
                1.6 小结
            </Typography>
            <Typography variant="body1">
                基于计算机的技术之所以能够成为强有力的教育工具，是因为它不仅仅提供了丰富的信息资源，而且可以延伸人类的能力和拓展支持学习的社交环境（这才是技术增强的学习（TEL）的核心）。技术在学习者、教师、材料、同伴、专家等角色之间成为交流的中介，能够使学习者在一个社会化的环境中
                体验并感知 学习。
            </Typography>
        </Paper>
    );
};

export default ChapterDetail;
