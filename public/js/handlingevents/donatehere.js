import {  init_web3 } from "./utils.js"
window.onload = async function () {

    var x = await init_web3()
  console.log("donate here app");

	document.getElementById("getOTP").addEventListener("click", function () {
	//Swal.fire("voifnvk");
	//var number = document.getElementById("donarphone").value;
	   var name=document.getElementById("donarname").value;
	   var phonenumber=document.getElementById("donarphone").value;
	   var address=document.getElementById("donaraddress").value;
	   var landmark=document.getElementById("donarlandmark").value;
	   var pincode=document.getElementById("donarpincode").value;
	   var email=document.getElementById("donaremail").value;

	   if(name!="") {
		   if(phonenumber!=""){
			   if(address!=""){
				  if(landmark!=""){
					  if(pincode!=""){
						  if(email!=""){
							    var text1 ="covid19 donation";
							    //Swal.fire(number);
							    //Swal.fire(text1);
								const num=phonenumber;
								const tex=text1;
								const data = { num,tex };
								const options = {
								  method: 'POST',
								  headers: {
									'Content-Type': 'application/json'
								  },
								  body: JSON.stringify(data)
								};
								 fetch('/', options)
								.then(function (res) {
								//console.log(JSON.parse(body))
								//return res.json()
								//console.log(res);
							    })
							    .catch(function (err) {
								// console.log(JSON.parse(body))
								//console.log(err);
							    });
							    //fetchServer(number,text1);

						    }
							else
								Swal.fire("email field is empty")
						}
						else
							Swal.fire("pincode field is empty")
				    }
				    else
					  Swal.fire("landmark field is empty")
			    }
			    else
				   Swal.fire("address field is empty")
		    }
		    else
			   Swal.fire("phone number field is empty")
	    }
	    else
		   Swal.fire("name field is empty")




    });

 document.getElementById("distributorgetotp").addEventListener("click", function () {
  //Swal.fire("voifnvk");
  //var number = document.getElementById("donarphone").value;
 var distributorregisterperson=document.getElementById("distributorregisterperson").value;
 var distributorname=document.getElementById("distributorname").value;
 var distributorusername=document.getElementById("distributorusername").value;
 var distributorpassword=document.getElementById("distributorpassword").value;
 var distributorgovernmentid=document.getElementById("distributorgovernmentid").value;
 var distributorgovernmentidnumber=document.getElementById("distributorgovernmentidnumber").value;
 var distributorphone=document.getElementById("distributorphone").value;
 var distributoraddress=document.getElementById("distributoraddress").value;
 var distributorpincode=document.getElementById("distributorpincode").value;
  var distributoraboutyourwork=document.getElementById("distributoraboutyourwork").value;



 if(distributorname!=""){
	   if(distributorusername!=""){
		  if(distributorpassword!=""){
			  if(distributorgovernmentid!=""){
				  if(distributorgovernmentidnumber!=""){
						if(distributorphone!=""){
						  if(distributoraddress!=""){
							  if(distributorpincode!=""){
								  if(distributoraboutyourwork!=""){
										var text1 ="covid19 donation";
										//Swal.fire(number);
										//Swal.fire(text1);
										const num=distributorphone;
										const tex=text1;
										const data = { num,tex };
										const options = {
										  method: 'POST',
										  headers: {
											'Content-Type': 'application/json'
										  },
										  body: JSON.stringify(data)
										};
										 fetch('/', options)
										.then(function (res) {
										//console.log(JSON.parse(body))
										//return res.json()
										//console.log(res);
										})
										.catch(function (err) {
										// console.log(JSON.parse(body))
										//console.log(err);
										});
										//fetchServer(number,text1);
								  }
									else
											Swal.fire("About your work  field is empty")
								}
								else
											Swal.fire("Pincode field is empty")
							}
							else
											Swal.fire("Address field is empty")
						}
						else
											Swal.fire("Phone field field is empty")
					}
					else
											Swal.fire("Government Id number  field is empty")
			    }
				else
											Swal.fire("Government Id name field is empty")
		    }
			else
											Swal.fire("Password field is empty")
	    }
		else
											Swal.fire("Username field is empty")
   }
   else
											Swal.fire("Name field is empty")
});

	const fetchServer = ({ number, text1 }) => {
		console.log(number);
		console.log(text1);
		console.log("ggkifr");
		Swal.fire(number);
		Swal.fire(text1);
	const num="kuj";
	const tex="hklh";
	const data = { num,tex };
	const options = {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(data)
	};
	 fetch('/', options)
	.then(function (res) {
	  //console.log(JSON.parse(body))
	  //return res.json()
	    //console.log(res);
	  })
	  .catch(function (err) {
	 // console.log(JSON.parse(body))
	    //console.log(err);
	  });
	}


  document.getElementById("donarsubmit").addEventListener("click", function (){
   console.log("hbuttonp")
   var name=document.getElementById("donarname").value;
   var phonenumber=document.getElementById("donarphone").value;
   var address=document.getElementById("donaraddress").value;
   var landmark=document.getElementById("donarlandmark").value;
   var pincode=document.getElementById("donarpincode").value;
   var email=document.getElementById("donaremail").value;
   var otp=document.getElementById("donarotp").value;

   console.log(name)
   console.log(phonenumber)
   console.log(address)
   console.log(email)
   if(name!="") {
	   if(phonenumber!=""){
		   if(address!=""){
			  if(landmark!=""){
				  if(pincode!=""){
					  if(email!=""){
						 if(otp!=""){
								window.pm.methods.donorRegd(name,phonenumber,address,landmark,pincode,email,otp).send({ from: window.accounts[0], gas: 100000000 }, function (error, result) {
								if (error) {
									console.log(error)
									console.log("false")
								} else {
									console.log(result)

								}
							   })
						  }
						  else
							  Swal.fire("otp field is empty")
						}
						else
							Swal.fire("email field is empty")
					}
					else
						Swal.fire("pincode field is empty")
			    }
			    else
				  Swal.fire("landmark field is empty")
		    }
		    else
			   Swal.fire("address field is empty")
	    }
	    else
		   Swal.fire("phone number field is empty")
    }
    else
	   Swal.fire("name field is empty")



})


	document.getElementById("newdonationsubmit").addEventListener("click", function (){

	   var newdonationphone=document.getElementById("searchdonarbyphonenumer").value;
	   var newdonationdescribe=document.getElementById("newdonationdescribe").value;
	   var newdonationdequantity=document.getElementById("newdonationquantity").value;
	   var newdonationdeduration=document.getElementById("newdonationduration").value;
	   var newdonationdateofpickup=document.getElementById("newdonationdate").value;
	   var newdonationdestarttime=document.getElementById("newdonationpickup").value;
	   var newdonationdesendtime=document.getElementById("newdonationend").value;
	   var newdonationdeotp=document.getElementById("newdonationotp").value;
	   var pincode;

	   if(newdonationphone!=""){
		   if(newdonationdescribe!=""){
			   if(newdonationdequantity!=""){
				  if(newdonationdeduration!=""){
					  if(newdonationdateofpickup!=""){
						  if(newdonationdestarttime!=""){
							  if(newdonationdesendtime!=""){
								if(newdonationdeotp!=""){
										window.pm.methods.getdonordetail(newdonationphone).call({ from: window.accounts[0], gas: 100000000 }, function (error, result) {
											if (error) {

												console.log(error)
											}
											else
											{
													pincode=result[3]
													console.log(newdonationphone)
													console.log(result[3])
													console.log(newdonationdescribe)

													console.log(newdonationdequantity)
													console.log(newdonationdeduration)
													console.log(newdonationdateofpickup)
													newdonationdateofpickup=newdonationdateofpickup;
													console.log(newdonationdestarttime)
													newdonationdestarttime=newdonationdestarttime;
													console.log(newdonationdesendtime)
													console.log(newdonationdeotp)

														window.pm.methods.newDonation(newdonationphone,result[3],newdonationdescribe,newdonationdequantity,newdonationdeduration,newdonationdateofpickup,newdonationdestarttime,newdonationdesendtime).send({ from: window.accounts[0], gas: 100000000 }, function (error, result) {
														   if (error) {
																console.log(error)
																console.log("false")
																} else {
																	var tbl1 = document.getElementById('tblSample3');
																  var lastRow1 = tbl1.rows.length;
																  var i1;
																  for(i1=1;i1<lastRow1;i1++){
																	  tbl1.deleteRow(lastRow1-i1);
																  }
																  console.log(i1)
																  if(i1 == lastRow1){
																	showdetails();
																  }
																	// showdetails();
																console.log(result)
																}
														})
											}
											})

											}
											else
												Swal.fire("Otp field is empty")
							    }
								else
									Swal.fire("Waiting  field is empty")
						    }
							else
									Swal.fire("Start time  field is empty")
					    }
						else
									Swal.fire("Date field is empty")
				    }
					else
									Swal.fire("Duation field is empty")
			    }
				else
									Swal.fire("Quantity field is empty")
		   }
		   else
									Swal.fire("Describe field is empty")
	   }
	   else
									Swal.fire("phone number field is empty")





	})


	document.getElementById("donarsearch").addEventListener("click", function (){
    var x = document.getElementById("donateheresearchbyphonenumberdetails");
	var z = document.getElementById("donatehereregister");
	var y = document.getElementById("donateheresearchbyphonenumber");

    x.style.display = "block";
	z.style.display = "none";
	y.style.display = "block";
	var tbl1 = document.getElementById('tblSample3');
	var i1;
								  var lastRow1 = tbl1.rows.length;
								  for(i1=1;i1<lastRow1;i1++){
									  tbl1.deleteRow(lastRow1-i1);
								  }
	//Swal.fire(i1)
	if(i1== lastRow1){
		showdetails();
	}

	//Swal.fire("show by sdearch")

	})

	document.getElementById("donarnewDonator").addEventListener("click", function (){

	var x = document.getElementById("donateheresearchbyphonenumberdetails");
	var z = document.getElementById("donatehereregister");
	var y = document.getElementById("donateheresearchbyphonenumber");

	x.style.display = "none";
	z.style.display = "block";
	y.style.display = "block";

	})


	 document.getElementById("distributorsubmit").addEventListener("click", function (){

	   var distributorregisterperson=document.getElementById("distributorregisterperson").value;
	   var distributorname=document.getElementById("distributorname").value;
	   var distributorusername=document.getElementById("distributorusername").value;
	   var distributorpassword=document.getElementById("distributorpassword").value;
	   var distributorgovernmentid=document.getElementById("distributorgovernmentid").value;
	   var distributorgovernmentidnumber=document.getElementById("distributorgovernmentidnumber").value;
	   var distributorphone=document.getElementById("distributorphone").value;
	   var distributoraddress=document.getElementById("distributoraddress").value;
	   var distributorpincode=document.getElementById("distributorpincode").value;
	    var distributoraboutyourwork=document.getElementById("distributoraboutyourwork").value;
	   var distributorgetotp=document.getElementById("distributorgetotp").value;



		   if(distributorname!=""){
			   if(distributorusername!=""){
				  if(distributorpassword!=""){
					  if(distributorgovernmentid!=""){
						  if(distributorgovernmentidnumber!=""){
								if(distributorphone!=""){
								  if(distributoraddress!=""){
									  if(distributorpincode!=""){
										  if(distributoraboutyourwork!=""){
											  if(distributorgetotp!=""){
												  //Swal.fire("al correct")
												    window.pm.methods.Distributorreg(distributorregisterperson,distributorname,distributorusername,distributorpassword,distributorgovernmentid,distributorgovernmentidnumber,distributorphone,distributoraddress,distributorpincode,distributoraboutyourwork,distributorgetotp).send({ from: window.accounts[0], gas: 1000000000 }, function (error, result) {
													if (error) {
														Swal.fire("distributor error")
														console.log(error)
														console.log("false")
													} else {
														//Swal.fire("distributot regsiter")
														console.log(result)
														Swal.fire("Registration is complete , please login ");
													}
												   })

												}
												else
													Swal.fire("OTP  field is empty")
											}
											else
													Swal.fire("About your work  field is empty")
										}
										else
													Swal.fire("Pincode field is empty")
									}
									else
													Swal.fire("Address field  missing")
								}
								else
													Swal.fire("Phone field is empty")
							}
							else
													Swal.fire("Government Id number  field is empty")
					    }
						else
													Swal.fire("Government Id name field is empty")
				    }
					else
													Swal.fire("Password field is empty")
			    }
				else
													Swal.fire("Username field is empty")
		   }
		   else
													Swal.fire("Name field is empty")
	 })

	  document.getElementById("distributorlogin").addEventListener("click", function (){

	   var distributorloginuserid=document.getElementById("distributorloginuserid").value;
	   var distributorloginpassword=document.getElementById("distributorloginpassword").value;

	      if(distributorloginuserid!=""){
			   if(distributorloginpassword!=""){
				   window.pm.methods.Login(distributorloginuserid,distributorloginpassword).call({ from: window.accounts[0], gas: 100000000 }, function (error, result) {
									if (error) {
										console.log(error)
										console.log("false")
									} else {
										Swal.fire("your id "+result)
									    console.log(result)
										//var q = document.getElementById("tblSample1");
										//q.style.display = "block";
										var distributorid=result;
										window.pm.methods.getDistributorDetails(result).call({ from: window.accounts[0], gas: 100000000 }, function (error, result) {
											if (error) {

												console.log(error)
											} else {
												//Swal.fire(result[2]);
												console.log(result[2])
												window.pm.methods.findrespectiveReferenceIdbypin(result[2]).call({ from: window.accounts[0], gas: 100000000 }, function (error, result) {
													if (error) {

														console.log(error)
													} else {
														//Swal.fire(result)
														console.log(result)
														var tbl1 = document.getElementById('tblSample1');
														var i1;
																					  var lastRow1 = tbl1.rows.length;
																					  for(i1=1;i1<lastRow1;i1++){
																						  tbl1.deleteRow(lastRow1-i1);
																					  }
														//Swal.fire(i1)
														if(i1== lastRow1){
															showdistributordetails(result,distributorid);
														}

													}
												})
											}
										})


									}
					})
				}
				else
													Swal.fire("Distributor user Id field is empty")
		    }
		   else
													Swal.fire("Distributor password field is empty")


	 })

	 document.getElementById("pickupservicedonatorsubmit").addEventListener("click", function (){

		 window.pm.methods.donorconfirmation(document.getElementById("pickupservicedonatorreferenceid").value).send({ from: window.accounts[0], gas: 100000000 }, function (error, result) {
								if (error) {

									console.log(error)
								} else {
									Swal.fire("please check the status")
																			console.log(result)

								}
		 })

	 })

	 document.getElementById("pickupservicedistributorid").addEventListener("click", function (){
		 var pickupservicedistributorreferenceid=document.getElementById("pickupservicedistributorreferenceid").value ;
		 var pickupservicedistributorid=document.getElementById("pickupservicedistributorid").value ;
		 window.pm.methods.pickupbydist(pickupservicedistributorreferenceid,pickupservicedistributorid).send({ from: window.accounts[0], gas: 100000000 }, function (error, result) {
									if (error) {

										console.log(error)
									} else {
																		Swal.fire("please check the status")
										console.log(result)
									}
		 })

	 })

}

	function showdistributordetails(result,distributorid){
				    //Swal.fire("function inside function");
					var i;
					var count=0;
					for(var i1=0;i1<result.length;i1++){
						if(result[i1]!=0){
							count+=1;
						}
						else
							break;
					}
					//Swal.fire(result)
					var referenceid;
					for (i = 0; i < count; i++) {
						if(result[i]!=0){
							referenceid=result[count-1-i];

							window.pm.methods.findrespectivebyReferenceId(result[count-1-i]).call({ from: window.accounts[0], gas: 100000000 }, function (error, resultdist) {
								if (error) {

									console.log(error)
								} else {
										//console.log(result[0])
										//console.log(result[1])
										//console.log(result[2])
										//console.log(result[3])

									  var tbl = document.getElementById('tblSample1');

									  var lastRow = tbl.rows.length;



									  //tbl.deleteRow(lastRow - 1);

									  // if there's no header row in the table, then iteration = lastRow + 1
									  //lastRow = tbl.rows.length;
									  var iteration = lastRow;
									  var row = tbl.insertRow(lastRow);

									  // left cell
									  var cellLeft = row.insertCell(0);
									  var el = document.createElement('input');
									  el.type = 'text';
									  el.name = 'txtRow' + iteration;
									  el.id = 'txtRow' + iteration;
									  el.size = 22;

									  el.value=''+ resultdist[6];
									  el.setAttribute('readonly','true');
									  cellLeft.appendChild(el);

									  // right cell
									  var cellRight1 = row.insertCell(1);
									  var el = document.createElement('input');
									  el.type = 'text';
									  el.name = 'txtRow' + iteration;
									  el.id = 'txtRow' + iteration;
									  el.size = 22;
									  el.value=''+resultdist[0];
									  el.setAttribute('readonly','true');
									  cellRight1.appendChild(el);


										var cellRight2 = row.insertCell(2);
									  var el = document.createElement('input');
									  el.type = 'text';
									  el.name = 'txtRow' + iteration;
									  el.id = 'txtRow' + iteration;
									  el.size = 8;
									  el.value=''+resultdist[1];
									  el.setAttribute('readonly','true');
									  cellRight2.appendChild(el);

									  var cellRight3 = row.insertCell(3);
									  var el = document.createElement('input');
									  el.type = 'text';
									  el.name = 'txtRow' + iteration;
									  el.id = 'txtRow' + iteration;
									  el.size = 8;
									  el.value=''+resultdist[2];
									  el.setAttribute('readonly','true');
									  cellRight3.appendChild(el);

									  var cellRight4 = row.insertCell(4);
									  var el = document.createElement('input');
									  el.type = 'text';
									  el.name = 'txtRow' + iteration;
									  el.id = 'txtRow' + iteration;
									  el.size = 10;
									  el.value=''+resultdist[3];
									  el.setAttribute('readonly','true');
									  cellRight4.appendChild(el);

									  var cellRight5 = row.insertCell(5);
									  var el = document.createElement('input');
									  el.type = 'text';
									  el.name = 'txtRow' + iteration;
									  el.id = 'txtRow' + iteration;
									  el.size = 22;
									  el.value=''+resultdist[4];
									  el.setAttribute('readonly','true');
									  cellRight5.appendChild(el);

									  var cellRight6 = row.insertCell(6);
									  var el = document.createElement('input');
									  el.type = 'text';
									  el.name = 'txtRow' + iteration;
									  el.id = 'txtRow' + iteration;
									  el.size = 22;
									  el.value=''+resultdist[5];
									  el.setAttribute('readonly','true');
									  cellRight6.appendChild(el);

									  var cellRight7 = row.insertCell(7);
									  var el = document.createElement('input');
									  el.type = 'submit';
									  el.name = 'txtRow' + iteration;
									  el.id = 'txtRow' + iteration;
									  el.size = 10;
									  el.value="Accept";

									  el.onclick=function(){

									  //string1.localeCompare(string2)
									  if(resultdist[5].localeCompare("Pending")==0){
										  //Swal.fire("inside accept")
										  window.pm.methods.responsedist(resultdist[6],distributorid,1).send({ from: window.accounts[0], gas: 100000000 }, function (error, result) {
											if (error) {
												console.log(error)
												console.log("false")
											} else {
												console.log(result[0])
												console.log(result[1])
												console.log(result[2])
												Swal.fire("please login again to see changes");
											}
										   })
									  }
									  else
										  Swal.fire("Request is already in process OR Request is in transit state")


									  //Swal.fire('txtRow'+iteration);

									  };
									  cellRight7.appendChild(el);

									  var cellRight8 = row.insertCell(8);
									  var el = document.createElement('input');
									  el.type = 'submit';
									  el.name = 'txtRow' + iteration;
									  el.id = 'txtRow' + iteration;
									  el.size = 10;
									  el.value="Reject";
									  el.onclick=function(){

									  if(resultdist[5].localeCompare("Accept")==0){
										 window.pm.methods.responsedist(resultdist[6],distributorid,0).send({ from: window.accounts[0], gas: 100000000 }, function (error, result) {
											if (error) {
												console.log(error)
												console.log("false")
											} else {
												console.log("reject"+ result[0])
												console.log(result[1])
												console.log(result[2])

												Swal.fire("Please login again to see changes OR Request is in transit state by another distributor");

											}
										})
									  }
									  else
										  Swal.fire("Request is not yet processed OR Request is in transit state")


										  //Swal.fire('txtRow'+iteration);

									  };
									  cellRight8.appendChild(el);

									  var cellRight9 = row.insertCell(9);
									  var el = document.createElement('input');
									  el.type = 'submit';
									  el.name = 'txtRow' + iteration;
									  el.id = 'txtRow' + iteration;
									  el.size = 10;
									  el.value="Schedule Later";
									  el.onclick=function(){ Swal.fire('schedule later'); };
									  cellRight9.appendChild(el);

									  console.log(resultdist)
								}
							});

						}
						else
							break;
					}

	}

 function showdetails(){
		 //Swal.fire("function inside function");
	     var searchdonarbyphonenumber=document.getElementById("searchdonarbyphonenumer").value;
		 //Swal.fire(searchdonarbyphonenumber);
			window.pm.methods.findrespectiveReferenceIdbyphone(searchdonarbyphonenumber).call({ from: window.accounts[0], gas: 100000000 }, function (error, result) {
			if (error) {

				console.log(error)
			} else {
				var i;
				var count=0;
				console.log(result);
				for(var i1=0;i1<result.length;i1++){
					if(result[i1]!=0){
						count+=1;
					}
					else
						break;
				}
				console.log("count"+count)
				//Swal.fire(result)
				for (i = 0; i < count; i++) {
					if(result[i]!=0){
						var referenceid=result[count-1-i];

						window.pm.methods.findrespectivebyReferenceId(result[count-1-i]).call({ from: window.accounts[0], gas: 100000000 }, function (error, resultdona) {
							if (error) {

								console.log(error)
							} else {
									//console.log(result[0])
									//console.log(result[1])
									//console.log(result[2])
									//console.log(result[3])

								  var tbl = document.getElementById('tblSample3');

								  var lastRow = tbl.rows.length;



								  //tbl.deleteRow(lastRow - 1);

								  // if there's no header row in the table, then iteration = lastRow + 1
								  //lastRow = tbl.rows.length;
								  var iteration = lastRow;
								  var row = tbl.insertRow(lastRow);

								  // left cell
								  var cellLeft = row.insertCell(0);
								  var el = document.createElement('input');
								  el.type = 'text';
								  el.name = 'txtRow' + iteration;
								  el.id = 'txtRow' + iteration;
								  el.size = 25;

								  el.value=''+ resultdona[6];
								  el.setAttribute('readonly','true');
								  cellLeft.appendChild(el);

								  // right cell
								  var cellRight1 = row.insertCell(1);
								  var el = document.createElement('input');
								  el.type = 'text';
								  el.name = 'txtRow' + iteration;
								  el.id = 'txtRow' + iteration;
								  el.size = 25;
								  el.value=''+resultdona[0];
								  el.setAttribute('readonly','true');
								  cellRight1.appendChild(el);


									var cellRight2 = row.insertCell(2);
								  var el = document.createElement('input');
								  el.type = 'text';
								  el.name = 'txtRow' + iteration;
								  el.id = 'txtRow' + iteration;
								  el.size = 10;
								  el.value=''+resultdona[1];
								  el.setAttribute('readonly','true');
								  cellRight2.appendChild(el);

								  var cellRight3 = row.insertCell(3);
								  var el = document.createElement('input');
								  el.type = 'text';
								  el.name = 'txtRow' + iteration;
								  el.id = 'txtRow' + iteration;
								  el.size = 10;
								  el.value=''+resultdona[2];
								  el.setAttribute('readonly','true');
								  cellRight3.appendChild(el);

								  var cellRight4 = row.insertCell(4);
								  var el = document.createElement('input');
								  el.type = 'text';
								  el.name = 'txtRow' + iteration;
								  el.id = 'txtRow' + iteration;
								  el.size = 10;
								  el.value=''+resultdona[3];
								  el.setAttribute('readonly','true');
								  cellRight4.appendChild(el);

								  var cellRight5 = row.insertCell(5);
								  var el = document.createElement('input');
								  el.type = 'text';
								  el.name = 'txtRow' + iteration;
								  el.id = 'txtRow' + iteration;
								  el.size = 25;
								  el.value=''+resultdona[4];
								  el.setAttribute('readonly','true');
								  cellRight5.appendChild(el);

								  var cellRight6 = row.insertCell(6);
								  var el = document.createElement('input');
								  el.type = 'text';
								  el.name = 'txtRow' + iteration;
								  el.id = 'txtRow' + iteration;
								  el.size = 25;
								  el.value=''+resultdona[5];
								  el.setAttribute('readonly','true');
								  cellRight6.appendChild(el);

								  //el.onclick=myFunction();
											console.log(resultdona)
											//Logic to remove item from owned list
							}
						});

					}
					else
						break;
				}

				//Swal.fire(count);
				//Swal.fire(result.length);
				//Swal.fire(result)
				console.log(error)
			}
			})
}
