import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import { IoIosArrowDown } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

export default function AccordionTransition() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  
  };

  return (
    <div className='w-full h-full bg-[#FCFCFC] '>
       
        <div className='w-full h-full flex flex-col justify-center items-center w-full h-[500px] gap-5 p-14 mt-10'>
        <h1 className='font-fam text-3xl mr-[44%]'>Explore options near me</h1>
      <Accordion className='w-[1000px] border-2 border-b-0 ' 
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
       
        
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        }}
      >
        <AccordionSummary 
       
          expandIcon={ <IoIosArrowDown />}  
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className='p-3 h-10   '>Popular cuisines near me</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className=''>
        <ul className='grid grid-cols-5 gap-1 ul font-rail  font-medium' >
          <li ><GoDotFill className='w-2 h-2' /> Bakery food near me </li> 
          <li> <GoDotFill className='w-2 h-2' /> food near meBiryani  </li> 
          <li> <GoDotFill className='w-2 h-2' />food near meBurger</li> 
          <li> <GoDotFill className='w-2 h-2' /> food near meChinese </li>
          <li> <GoDotFill className='w-2 h-2' />near meDesserts food</li>
          <li> <GoDotFill className='w-2 h-2' />Cream  meJuices </li>
          <li> <GoDotFill className='w-2 h-2' />food near meMomos </li>
          <li> <GoDotFill className='w-2 h-2' /> food near meMughlai  </li>
          <li> <GoDotFill className='w-2 h-2' />meNorth Indian food </li>
          <li> <GoDotFill className='w-2 h-2' /> mePizza food near</li>
          <li> <GoDotFill className='w-2 h-2' /> meRolls food near  </li>
          <li>  <GoDotFill className='w-2 h-2' />food near meSeafood</li>
          <li> <GoDotFill className='w-2 h-2' /> food near meShake</li>
          <li> <GoDotFill className='w-2 h-2' />food near meSichuan </li>
          <li>  <GoDotFill className='w-2 h-2' /> meSouth Indian r</li>
          <li> <GoDotFill className='w-2 h-2' /> meStreet near meTea </li>
          <li> <GoDotFill className='w-2 h-2' />food near me</li>
</ul> 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='w-[1000px] border-2 border-b-0 '>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className='p-3 h-10'>Popular restaurant types near me</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className='grid grid-cols-5 gap-1 ul font-rail  font-medium' >
          <li ><GoDotFill className='w-2 h-2' /> Bakery food near me </li> 
          <li> <GoDotFill className='w-2 h-2' /> food near meBiryani  </li> 
          <li> <GoDotFill className='w-2 h-2' />food near meBurger</li> 
          <li> <GoDotFill className='w-2 h-2' /> food near meChinese </li>
          <li> <GoDotFill className='w-2 h-2' />near meDesserts food</li>
          <li> <GoDotFill className='w-2 h-2' />Cream  meJuices </li>
          <li> <GoDotFill className='w-2 h-2' />food near meMomos </li>
          <li> <GoDotFill className='w-2 h-2' /> food near meMughlai  </li>
          <li> <GoDotFill className='w-2 h-2' />meNorth Indian food </li>
          <li> <GoDotFill className='w-2 h-2' /> mePizza food near</li>
          <li> <GoDotFill className='w-2 h-2' /> meRolls food near  </li>
          <li>  <GoDotFill className='w-2 h-2' />food near meSeafood</li>
          <li> <GoDotFill className='w-2 h-2' /> food near meShake</li>
          <li> <GoDotFill className='w-2 h-2' />food near meSichuan </li>
          <li>  <GoDotFill className='w-2 h-2' /> meSouth Indian r</li>
          <li> <GoDotFill className='w-2 h-2' /> meStreet near meTea </li>
          <li> <GoDotFill className='w-2 h-2' />food near me</li>
</ul> 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='w-[1000px] border-2 border-b-0 '>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className='p-3 h-10 '>Popular restaurant types near me</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className='grid grid-cols-5 gap-1 ul font-rail  font-medium' >
          <li ><GoDotFill className='w-2 h-2' /> Bakery food near me </li> 
          <li> <GoDotFill className='w-2 h-2' /> food near meBiryani  </li> 
          <li> <GoDotFill className='w-2 h-2' />food near meBurger</li> 
          <li> <GoDotFill className='w-2 h-2' /> food near meChinese </li>
          <li> <GoDotFill className='w-2 h-2' />near meDesserts food</li>
          <li> <GoDotFill className='w-2 h-2' />Cream  meJuices </li>
          <li> <GoDotFill className='w-2 h-2' />food near meMomos </li>
          <li> <GoDotFill className='w-2 h-2' /> food near meMughlai  </li>
          <li> <GoDotFill className='w-2 h-2' />meNorth Indian food </li>
          <li> <GoDotFill className='w-2 h-2' /> mePizza food near</li>
          <li> <GoDotFill className='w-2 h-2' /> meRolls food near  </li>
          <li>  <GoDotFill className='w-2 h-2' />food near meSeafood</li>
          <li> <GoDotFill className='w-2 h-2' /> food near meShake</li>
          <li> <GoDotFill className='w-2 h-2' />food near meSichuan </li>
          <li>  <GoDotFill className='w-2 h-2' /> meSouth Indian r</li>
          <li> <GoDotFill className='w-2 h-2' /> meStreet near meTea </li>
          <li> <GoDotFill className='w-2 h-2' />food near me</li>
</ul> 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='w-[1000px] border-2 border-b-0 '>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className='p-3 h-10'>Cities We Deliver To</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
          <ul className='grid grid-cols-5 gap-1 ul font-rail  font-medium' >
          <li ><GoDotFill className='w-2 h-2' /> Bakery food near me </li> 
          <li> <GoDotFill className='w-2 h-2' /> food near meBiryani  </li> 
          <li> <GoDotFill className='w-2 h-2' />food near meBurger</li> 
          <li> <GoDotFill className='w-2 h-2' /> food near meChinese </li>
          <li> <GoDotFill className='w-2 h-2' />near meDesserts food</li>
          <li> <GoDotFill className='w-2 h-2' />Cream  meJuices </li>
          <li> <GoDotFill className='w-2 h-2' />food near meMomos </li>
          <li> <GoDotFill className='w-2 h-2' /> food near meMughlai  </li>
          <li> <GoDotFill className='w-2 h-2' />meNorth Indian food </li>
          <li> <GoDotFill className='w-2 h-2' /> mePizza food near</li>
          <li> <GoDotFill className='w-2 h-2' /> meRolls food near  </li>
          <li>  <GoDotFill className='w-2 h-2' />food near meSeafood</li>
          <li> <GoDotFill className='w-2 h-2' /> food near meShake</li>
          <li> <GoDotFill className='w-2 h-2' />food near meSichuan </li>
          <li>  <GoDotFill className='w-2 h-2' /> meSouth Indian r</li>
          <li> <GoDotFill className='w-2 h-2' /> meStreet near meTea </li>
          <li> <GoDotFill className='w-2 h-2' />food near me</li>
</ul> 
              </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  );
}
