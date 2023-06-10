

export default function Bee() {
  return (
  
    <div  className="min-h-screen p-6  bg-[#f6b112] flex items-center justify-center">
       <form action="https://script.google.com/macros/s/AKfycbzdL5QD9jVpxQ_wVmKFhrQfNCVTDnA5K4RX7Q_zVDTPMGn2cktXQKvVXsbqdP30NPJO/exec" method="post">
        
      <div  className="container max-w-screen-lg mx-auto">
        <div>
          <h2  className="font-semibold text-xl text-gray-600">Responsive Form</h2>
          <p  className="text-gray-500 mb-6">Form is mobile responsive. Give it a try.</p>
    
          <div  className="bg-yellow rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div  className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              
          
              <div  className="lg:col-span-4">
              <div  className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
            
                <div  className="md:col-span-3">
                
              <label  >Name</label>
				<input className="mt-1  px-4  w-full bg-gray-100 h-10 text-gray-900  rounded-none focus:outline-none  focus:shadow-outline"
            type="text" name="name" placeholder="First Name*" /><br />
        
         </div>
         <div  className="md:col-span-2">
         <label  >Surname</label>
				<input className="mt-1  px-4  w-full bg-gray-100 h-10 text-gray-900  rounded-none focus:outline-none  focus:shadow-outline"
            type="text" name='surname' placeholder="First Name*" /><br />
        </div>
        <div  className="md:col-span-3">
        <label  >Father  Name</label>
				<input className="mt-1  px-4  w-full bg-gray-100 h-10 text-gray-900  rounded-none focus:outline-none  focus:shadow-outline"
            type="text" name="fname" placeholder="Fathe's Name*" /><br />
         </div>
         <div  className="md:col-span-2">
         <label  >Mother  Name</label>
				<input className="mt-1  px-4  w-full bg-gray-100 h-10 text-gray-900  rounded-none focus:outline-none  focus:shadow-outline"
            type="text" name='mom' placeholder="First Name*" /><br />
        </div>





        <div  className="md:col-span-2">
          <label  >Department</label>
				<input className="mt-1  px-4  w-full bg-gray-100 h-10 text-gray-900  rounded-none focus:outline-none  focus:shadow-outline"
           name ='department'  type="text" placeholder="First Name*" /><br />
         </div>
         <div  className="md:col-span-1">
          <label  >Semester</label>
				<input className="mt-1  px-4  w-full bg-gray-100 h-10 text-gray-900  rounded-none focus:outline-none  focus:shadow-outline"
           name ='sem'  type="number" min="1" max="8"  placeholder="Sem*" /><br />
         </div>
         
         <div  className="md:col-span-2">
          <label  >Mobile Number</label>
				<input className="mt-1  px-4 w-full bg-gray-100 h-10 text-gray-900  rounded-none focus:outline-none  focus:shadow-outline"
            type="number" name="number" placeholder="First Name*" /><br />
</div>

<div  className="md:col-span-2">
          <label  >City</label>
				<input className="mt-1  px-4  w-full bg-gray-100 h-10 text-gray-900  rounded-none focus:outline-none  focus:shadow-outline"
           name ='city'  type="text" placeholder="First Name*" /><br />
         </div>
         <div  className="md:col-span-1">
          <label  >Pincode</label>
				<input className="mt-1  px-4  w-full bg-gray-100 h-10 text-gray-900  rounded-none focus:outline-none  focus:shadow-outline"
           name ='pin'  type="number"   placeholder="Sem*" /><br />
         </div>
         
         <div  className="md:col-span-2">
          <label  >State</label>
				<input className="mt-1  px-4 w-full bg-gray-100 h-10 text-gray-900  rounded-none focus:outline-none  focus:shadow-outline"
            type="text" name="state" placeholder="First Name*" /><br />
</div>
      
<div  className="md:col-span-3">
       
<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Address</label>
<textarea name='current' id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 " placeholder="Write your thoughts here..."></textarea>

</div>
      

<div  className="md:col-span-2">
       
<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Permenant Address</label>
<textarea name="pad" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>

</div>
      
        
       
         
        </div>
        <br />

                  <div  className="md:col-span-5 text-right">
                    {/* <div  className="flex flex-col items-center">
                      <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">Submit</button>
                    </div> */}
                 
                 <div class="space-x-4 mt-8">
                 <button className="uppercase text-sm font-bold tracking-wide bg-black text-gray-100 p-3 rounded-lg w-full  justify-center
                      focus:outline-none focus:shadow-outline shadow-xl">
            Submit
          </button>
    
      </div>
                 </div>
    
                 </div>
    
                 </div>
                 </div>
                 </div>
    
               </div>
               </form> 
            </div>
              
    
               
           
          
    
      
      
      
  )
}