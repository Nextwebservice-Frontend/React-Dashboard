
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
const FontPages = () => {
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
                    <FileCopyOutlinedIcon sx={{ mr: "10px", mb: "1px",color:"#7e7e7e" }} />

                    <Typography fontSize="large" sx={{color:"#7e7e7e"}} >
                       Font Pages
                    </Typography>
                </AccordionSummary>
                <AccordionDetails className="space-y-4">
                    <Typography
                        component="p"
                        className="text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100 "
                    >
                        <FiberManualRecordOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} /> Landing
                    </Typography>
                    <Typography
                        component="p"
                        className="text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100"
                    >
                        <FiberManualRecordOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} /> Pricing
                    </Typography>
                    <Typography
                        component="p"
                        className="text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100"
                    >
                        <FiberManualRecordOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} /> Payment
                    </Typography>
                    <Typography
                        component="p"
                        className="text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100"
                    >
                        <FiberManualRecordOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} /> Checkout
                    </Typography>
                    <Typography
                        component="p"
                        className="text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100"
                    >
                        <FiberManualRecordOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} /> Help Center
                    </Typography>
                   
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default FontPages;