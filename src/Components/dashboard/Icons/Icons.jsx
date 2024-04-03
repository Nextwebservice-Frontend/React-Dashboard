import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

const Icons = () => {
    return (
        <div>
            <Accordion
                className="border"

            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="text-[14px] font-semibold"
                >
                    <TerminalOutlinedIcon sx={{ mr: "10px", mb: "1px", color: "#7e7e7e" }} />

                    <Typography fontSize="large" sx={{ color: "#7e7e7e" }} >
                        Icons
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className="space-y-4">
                    <Typography
                        component="p"
                        className="text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100 "
                    >
                        <FiberManualRecordOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} /> Collapsed menu
                    </Typography>
                    <Typography
                        component="p"
                        className="text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100"
                    >
                        <FiberManualRecordOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} /> Content navbar
                    </Typography>
                    <Typography
                        component="p"
                        className="text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100"
                    >
                        <FiberManualRecordOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} /> Content navbar + Sidebar
                    </Typography>

                    <Typography
                        component="p"
                        className="text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100"
                    >
                        <FiberManualRecordOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} />Container
                    </Typography>
                    <Typography
                        component="p"
                        className="text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100"
                    >
                        <FiberManualRecordOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} />Blank
                    </Typography>

                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Icons;