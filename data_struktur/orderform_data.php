<?php
		error_reporting(0);
			//	Beställnings fomuläret för adressen: freddehboy@hotmail.com

				//Själva inputs från besökaren
						$name = $_POST['full_name'];
					 $email = $_POST['email'];
				 	$subject = $_POST['rubrik'];
					 $messegnes = $_POST['meddelande'];
		
							
						// Beställning
									$bname = $_POST['bnamn'];
									$input_filename = $_POST['file_name'];
									
					 $no_spam = $_POST['no_spam'];
						
									$submit = $_POST['submit'];
						
					// Stome för mailet - Huvudet och funktion
						$to = 'freddehboy@hotmail.com';
						
						$sender = "Avsändare:  $name";
									$sender_email = "E - Mail:  $email";
						
						$order_name = "Beställningsnamn: $bname";
									$filename = "Filnamn: $input_filename";
									
						$meddelande = "Meddelande:\n $messegnes";

					// Stome för mailet - Själva mailinnehållet
						$body = "Från: Beställnings formuläret:\n\n $sender\n  $sender_email\n\n $order_name\n $filename\n\n $meddelande";
						
					// Skickad eller inte?
								if ($_POST['submit'])
											{
												if (mail($to, $subject, $body))
													{
														echo 'Ordern är nu skickad. Återkommer inom några dagar :)';
													}
														else
														{ 
															echo 'Någonting blev inte rätt ifyllt, mailet skickades därför inte! <br><br> Var god försök igen!';
														}
														
											}
															else if ($_POST['submit'] != $no_spam)
															{
																echo 'Du bockade inte för "Ingen Robbot!", mailet skickades därför inte! <br><br> Var god försök igen';
															}
?>