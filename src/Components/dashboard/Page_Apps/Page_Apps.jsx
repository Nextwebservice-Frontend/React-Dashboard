import { Typography } from "@mui/material";
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ViewKanbanOutlinedIcon from '@mui/icons-material/ViewKanbanOutlined';

const Page_Apps = () => {
    return (
        <div className="space-y-3">
            <Typography
                        component="p"
                        className="text-[12px] text-[#7e7e7e] font-semibold p-2 px-4 rounded-lg hover:bg-slate-100 "
                    >
                        <AttachEmailOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} /> Email
                    </Typography>
                    <Typography
                        component="p"
                        className="text-[12px] text-[#7e7e7e] font-semibold p-2 px-4 rounded-lg hover:bg-slate-100"
                    >
                        <MarkChatUnreadOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} /> Chat
                    </Typography>
                    <Typography
                        component="p"
                        className="text-[12px] text-[#7e7e7e] font-semibold p-2 px-4 rounded-lg hover:bg-slate-100"
                    >
                        <CalendarMonthOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} /> Calender
                    </Typography>
                    <Typography
                        component="p"
                        className="text-[12px] text-[#7e7e7e] font-semibold p-2 px-4 rounded-lg hover:bg-slate-100"
                    >
                        <ViewKanbanOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} /> Kanban
                    </Typography>
        </div>
    );
};

export default Page_Apps;