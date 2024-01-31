pragma solidity >=0.4.21 <0.6.7;


contract covid19 {

    uint public indexnewDonation=0;
    uint[] newreferencelist;
    struct donor
    {
       string _name;
       uint _phnno;
       string _address1;
       string _address2;
       string _landmark;
       uint _pincode;
       string _email;
       string _otp;
      
    }
    mapping(uint => donor) public donors;
     struct addDonate
    {
        uint PhoneNo;
        uint pin;
        string desc;
        uint quantity;
        uint timeperiod;
        string date;
        string starttime;
        uint waitingtime;
        string statusbydonor;
        string statusbydist;

    }
     mapping(uint => addDonate) public Donateadd;
    function donorRegd(string memory Name, uint PhoneNo, string memory Address1, string memory landmark, uint Pincode, string memory EmailId, string memory otp) public returns (uint)
    {
    //uint did = didn++;
    donors[PhoneNo]._name= Name;
    donors[PhoneNo]._phnno = PhoneNo;
    donors[PhoneNo]._address1= Address1;
    donors[PhoneNo]._landmark = landmark;
    donors[PhoneNo]._pincode = Pincode;
    donors[PhoneNo]._email = EmailId;
    donors[PhoneNo]._otp = otp;
    
    return PhoneNo;
    }
    
    function getdonordetail(uint phnno) public returns (string memory, string memory,string memory, uint, string memory)
    {
       return (donors[phnno]._name,donors[phnno]._address1,donors[phnno]._landmark,donors[phnno]._pincode,donors[phnno]._email);
    }
    
    //mapping(uint=>uint[]) public referencelist;
    uint[] referencelist;
    function newDonation(uint phonenumber,uint pin, string memory Describe, uint Quantity, uint Duration, string memory Date, string memory Starttime, uint waitingtime) public returns (uint)
    {
        uint referenceId = uint(keccak256(abi.encodePacked(pin,Describe,Quantity,Duration,Date,Starttime,waitingtime)));
        //uint dn = dn1++;
        //string RSD;
        //string pending;
        referenceId = referenceId % 10000000000000;
        Donateadd[referenceId].PhoneNo = phonenumber;
        Donateadd[referenceId].pin = pin;
        Donateadd[referenceId].desc = Describe;
        Donateadd[referenceId].quantity = Quantity;
        Donateadd[referenceId].timeperiod = Duration;
        Donateadd[referenceId].date= Date;
        Donateadd[referenceId].starttime = Starttime;
        Donateadd[referenceId].waitingtime= waitingtime;
        Donateadd[referenceId].statusbydonor= "Request Send By Donar";
        Donateadd[referenceId].statusbydist= "Pending";
        
        newreferencelist.push(referenceId);
        indexnewDonation++;
        
    return (referenceId);
       
    }
    
    function findrespectivebyReferenceId(uint referenceId)public returns(string memory,uint,uint,string memory,string memory,string memory,uint){
        return (Donateadd[referenceId].desc,Donateadd[referenceId].quantity,Donateadd[referenceId].timeperiod,Donateadd[referenceId].date,Donateadd[referenceId].statusbydonor,Donateadd[referenceId].statusbydist,referenceId);
    }
    
    function findrespectiveReferenceIdbyphone(uint phonenumber)public returns(uint[1000] memory){
       uint[1000] memory respectivephonenumberReferenceIdlist;
       uint index=0;
        for(uint i=0;i<indexnewDonation;i++){
            if(Donateadd[newreferencelist[i]].PhoneNo==phonenumber){
                respectivephonenumberReferenceIdlist[index]=newreferencelist[i];
                index++;
            }
        }
        return respectivephonenumberReferenceIdlist;
    }
    
    
    function findrespectiveReferenceIdbypin(uint pin)public returns(uint[1000] memory){
       uint[1000] memory respectivepinnumberReferenceIdlist; 
       uint index=0;
        for(uint i=0;i<indexnewDonation;i++){
            if(Donateadd[newreferencelist[i]].pin==pin){
                if(keccak256(abi.encodePacked(Donateadd[newreferencelist[i]].statusbydonor)) != keccak256(abi.encodePacked("Confirm by Donar"))){
                   respectivepinnumberReferenceIdlist[index]=newreferencelist[i];
                   index++;   
                }
            }
        }
        return respectivepinnumberReferenceIdlist;
    }

  struct distributor
    {
       uint id;
       string _governmentbody;
       string _name;
       string _username;
       string _password;
       string _idname;
       uint _idno;
       uint _phnno;
       string _address1;
       uint _pincode;
       string _abt;
       string _otp;
       uint[] reflist;
    }
     mapping (uint=> distributor) distributors;
    function Distributorreg(string memory governmentbody,string memory name, string memory username, string memory password, string memory idname, uint idno, uint phnno, string memory address1, uint pincode, string memory  abt, string memory otp) public returns (uint)
   {   
       uint Id = uint(keccak256(abi.encodePacked(username,password)));
       
       Id=Id%10000000000000;
       distributors[Id]._governmentbody=governmentbody;
       distributors[Id]._name=name;
       distributors[Id]._username= username;
       distributors[Id]._password= password;
       distributors[Id]._idname=idname;
       distributors[Id]._idno=idno;
       distributors[Id]._phnno=phnno;
       distributors[Id]._address1=address1;
       distributors[Id]._pincode= pincode;
       distributors[Id]._abt=abt;
       distributors[Id]._otp=otp;
       distributors[Id].id=Id;
       return Id;
   
   }
   
   function getDistributorDetails(uint id)public returns(string memory,uint,uint){
       
       return (distributors[id]._name,distributors[id]._phnno,distributors[id]._pincode);
   }
   
     function Login(string memory uname ,string memory pass) public returns (uint){
         uint id1= uint(keccak256(abi.encodePacked(uname,pass)));
         id1 = id1 % 10000000000000;
        if(keccak256(abi.encodePacked(distributors[id1]._username)) == keccak256(abi.encodePacked(uname))) {
            if(keccak256(abi.encodePacked(distributors[id1]._password))==keccak256(abi.encodePacked(pass))) {
                    return (id1);
                }
            }
        }
        
       

 
  function responsedist(uint ref, uint id,uint value) public returns (bool,string memory,string memory)
{

    bool returnflag=false;
if(keccak256(abi.encodePacked(Donateadd[ref].statusbydonor)) == keccak256(abi.encodePacked("Request Send By Donar"))){
if(keccak256(abi.encodePacked(Donateadd[ref].statusbydist)) == keccak256(abi.encodePacked("Pending")))
{
        Donateadd[ref].statusbydist= "Accept";
        distributors[id].reflist.push(ref);
        returnflag=true;
}else if(keccak256(abi.encodePacked(Donateadd[ref].statusbydist)) == keccak256(abi.encodePacked("Accept"))){
    uint index=10000000000000;
       for(uint i=0;i<distributors[id].reflist.length;i++){
           if(ref==distributors[id].reflist[i]){
               index=i;
           }
       }
       if(index!=10000000000000){
           for(;index<distributors[id].reflist.length-1;index++){
               distributors[id].reflist[index]=distributors[id].reflist[index+1];
           }
           
           distributors[id].reflist.pop();
           Donateadd[ref].statusbydist= "Pending";
           returnflag=true;
       }
       else
       returnflag=false;
}
    
    
}

return (returnflag,Donateadd[ref].statusbydist,Donateadd[ref].statusbydonor);
//dist.push(id);
}
function pickupbydist(uint ref,uint id) public returns (bool,string memory,string memory)
{

    for(uint i=0;i<distributors[id].reflist.length;i++){
         if(ref==distributors[id].reflist[i]){
              if(keccak256(abi.encodePacked(Donateadd[ref].statusbydonor)) == keccak256(abi.encodePacked("Request Send By Donar"))) {
                    if(keccak256(abi.encodePacked(Donateadd[ref].statusbydist)) == keccak256(abi.encodePacked("Accept")))
                    {
                       Donateadd[ref].statusbydist = "Ready to Receive by Distributor";
                       Donateadd[ref].statusbydonor = "Pending Confirmation by Donor"; 
                       break;
                    }
               }   
         }   
    }

return (true,Donateadd[ref].statusbydist,Donateadd[ref].statusbydonor);
}
function donorconfirmation(uint ref) public returns (bool,string memory,string memory)
{

    if(keccak256(abi.encodePacked(Donateadd[ref].statusbydist))== keccak256(abi.encodePacked("Ready to Receive by Distributor"))) {
        if(keccak256(abi.encodePacked(Donateadd[ref].statusbydonor))== keccak256(abi.encodePacked("Pending Confirmation by Donor")))
    {
        Donateadd[ref].statusbydonor= "Confirm by Donar";
        Donateadd[ref].statusbydist = "Confirm by Distributor";

    }}
    return (true,Donateadd[ref].statusbydist,Donateadd[ref].statusbydonor);
}

    function statusDonation(uint referenceId) public returns (string memory, uint, uint, string memory, string memory, uint){

        return (Donateadd[referenceId].desc,Donateadd[referenceId].quantity,Donateadd[referenceId].timeperiod,Donateadd[referenceId].date,Donateadd[referenceId].starttime,Donateadd[referenceId].waitingtime);
   }
  function getstatus(uint ref) public returns (string memory, string memory)
  {
      return (Donateadd[ref].statusbydist,Donateadd[ref].statusbydonor);
  }
  
  function gettotaldonation()public returns(uint){
      
      return indexnewDonation;
  }
   
}