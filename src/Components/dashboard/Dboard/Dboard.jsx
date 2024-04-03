import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

const Dboard = () => {
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
                        <AddHomeOutlinedIcon sx={{ mr: "10px", mb: "1px",color:"#7e7e7e" }} />

                        <Typography fontSize="large" sx={{color:"#7e7e7e"}} >
                            Dashboard
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="space-y-4">
                        <Typography
                            component="p"
                            className="text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100 "
                        >
                            <FiberManualRecordOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} /> Analytics
                        </Typography>
                        <Typography
                            component="p"
                            className="text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100"
                        >
                            <FiberManualRecordOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} /> CRM
                        </Typography>
                        <Typography
                            component="p"
                            className="text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100"
                        >
                            <FiberManualRecordOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} /> eCommerce
                        </Typography>
                        <Typography
                            component="p"
                            className="text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100"
                        >
                            <FiberManualRecordOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} /> Logistics
                        </Typography>
                        <Typography
                            component="p"
                            className="text-[12px] text-[#7e7e7e] font-semibold p-2 rounded-lg hover:bg-slate-100"
                        >
                            <FiberManualRecordOutlinedIcon fontSize="small" sx={{ mt: "-5px" }} />Academy
                        </Typography>

                    </AccordionDetails>
                </Accordion>
        </div>
    );
};

export default Dboard;