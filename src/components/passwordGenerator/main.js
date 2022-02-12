/**This file contains all scripts required for A-codes - Password Generator application**/

			var CountSymbols = 0;
			var CountUpperCaseLetters = 0;
			var CountLowerCaseLetters = 0;
			var CountNumbers = 0;
			var passchartext = "";
			function myPasswordGenerator(resultData){
				return myPasswordGenerator(resultData.passwordLength
				, resultData.numbers
				, resultData.lowercase
				, resultData.uppercase
				, resultData.letterToBeginWith
				, resultData.symbols
				, resultData.similarChar
				, resultData.duplicateChar
				, resultData.sequentialChar
				, resultData.stringToInclude
				, resultData.refreshed );
			}
			function myPasswordGenerator(passwordLength,numbers,lowercase, uppercase, letterToBeginWith, symbols, similarChar, duplicateChar, sequentialChar, stringToInclude, refreshed ){
				//var validated = validatePasswordGenerator(passwordLength,numbers,lowercase, uppercase, letterToBeginWith, symbols, similarChar, duplicateChar, sequentialChar, stringToInclude, refreshed); 
				//alert(passwordLength);
				if(refreshed){ IsReset(); }
				passwordLength = 30;
				//alert('1');
				DistributeCharacterlength( passwordLength, numbers, lowercase, uppercase,symbols );
				//alert("2");
				
				return Randomgenerator(passwordLength);
			}
			
			function IsReset(){
				//alert('refreshed');
				CountSymbols = 0;
				CountUpperCaseLetters = 0;
				CountLowerCaseLetters = 0;
				CountNumbers = 0;
			}
			
			function IsSymbol(num){
				var result = false;
				if(	(num>=33 && num<=47)
					||(num>=58 && num<=64)
					||(num>=91 && num<=96)
					||(num>=123 && num<=126)
					)
				{
					result = true;
				}
				return result;
			}
			
			function IsNumber(num){
				var result = false;
				if(num >= 48 && num<=57){
					result = true;
				}
				return result;
			}
			
			function IsUpperCaseLetter(num){
				var result = false;
				if(num >= 65 && num<=90){
					result = true;
				}
				return result;
			}
			
			function IsLowerCaseLetter(num){
				var result = false;
				if(num >= 97 && num<=122){
					result = true;
				}
				return result;
			}
			
			function IsLetter(num){
				return IsUpperCaseLetter(num)||IsLowerCaseLetter(num); 
			}
			
			function DistributeCharacterlength( passwordLength, numbers, lowercase, uppercase,symbols ){
				var parts = 0;
				if(numbers) parts++;
				if(lowercase)parts++; 
				if(uppercase)parts++; 
				if(symbols)  parts++;
				var num = passwordLength/parts;
				num = Math.floor(num);
				var spare = passwordLength%parts;
				
				//alert(num);
				//alert(spare);
				
				if(symbols) CountSymbols = num;
				if(numbers) CountNumbers = num;
				if(lowercase) CountLowerCaseLetters = num;
				if(uppercase) CountUpperCaseLetters = num;
				
				if (spare>0) {
					CountSymbols++;
					spare--;
				}
				if (spare>0) {
					CountNumbers++;
					spare--;
				}
				if (spare>0) {
					CountLowerCaseLetters++;
					spare--;
				}
				//alert(CountSymbols,CountUpperCaseLetters );
				//alert(CountNumbers);
				//alert(CountLowerCaseLetters);
				//alert(CountUpperCaseLetters );
				
				
			}
			
			function getNumber(){
				var num = 0;
				do{ num = (Math.random()*1000)% 127;}
				while(!IsNumber(num));
				return num;
			}
			
			
			function getLetter(){
				var num = 0;
				do{ num = (Math.random()*1000)% 127;}
				while(!IsLetter(num));
				return num;
			}
			
			function getUpperCaseLetter(){
				var num = 0;
				do{ num = (Math.random()*1000)% 127;}
				while(!IsUpperCaseLetter(num));
				return num;
			}
			
			function getLowerCaseLetter(){
				var num = 0;
				do{ num = (Math.random()*1000)% 127;}
				while(!IsLowerCaseLetter(num));
				return num;
			}
			
			
			function getSymbols(){
				var num = 0;
				do{ num = (Math.random()*1000)% 127;}
				while(!IsSymbol(num));
				return num;
			}
			
			function selectRandomCharacterType(passwordLength){
				var IsNumbers, IsUpper, IsLower, IsSymbols ;
				var temp = passwordLength;
				do{ 
					IsNumbers = (CountNumbers > 0);
					IsUpper = (CountUpperCaseLetters > 0);
					IsLower = (CountLowerCaseLetters > 0);
					IsSymbols = (CountSymbols > 0);
					
					var Temp_ascii_code = 0;
					var tempturn  = 0;
					tempturn = (IsNumbers)? tempturn + 1 : tempturn ;
					tempturn = (IsUpper)? tempturn + 1 : tempturn ;
					tempturn = (IsLower)? tempturn + 1 : tempturn ;
					tempturn = (IsSymbols)? tempturn + 1 : tempturn ;
					
					do{
						num = (Math.random()*1000)% tempturn;
						
						num = Math.floor(num); 
						
						num = ((!IsNumbers) && num == 0)? num + 1 : num ;
						num = ((!IsUpper) && num == 1)? num + 1 : num ;
						num = ((!IsLower) && num == 2)? num + 1 : num ;
						num = ((!IsSymbols) && num == 3)? num + 1 : num ;
					}
					while(num == 4);
					//alert(num);
					
					switch(num){
						case 0: 
							if(IsNumbers){
								Temp_ascii_code = getNumber();
								CountNumbers--;
								var text = String.fromCharCode(Temp_ascii_code);
								passchartext = passchartext + text; 
								//alert(passchartext);
							}
							break;
						case 1:
							if(IsUpper){
								Temp_ascii_code = getUpperCaseLetter();
								CountUpperCaseLetters--;
								var text = String.fromCharCode(Temp_ascii_code);
								passchartext = passchartext + text; 
								//alert(passchartext);
							} 
							break;
						case 2:
							if(IsLower){							
								Temp_ascii_code = getLowerCaseLetter();
								CountLowerCaseLetters--;
								var text = String.fromCharCode(Temp_ascii_code);
								passchartext = passchartext + text; 
								//alert(passchartext);
							} 
							break;
						case 3:
							if(IsSymbols){
								Temp_ascii_code = getSymbols();
								CountSymbols--;
								var text = String.fromCharCode(Temp_ascii_code);
								passchartext = passchartext + text; 
								//alert(passchartext);
							}
							break;
					}
				}
				while(IsNumbers||IsUpper ||IsLower ||IsSymbols);
			}
			
			function Randomgenerator(passwordLength){
				var genratedpasswordLength = 0;
				var ascii_code= 0;//Math.random()*1000;
				selectRandomCharacterType(passwordLength);
				var passlength = passchartext.length;
				passchartext = String(passchartext).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
				return passchartext + " Count : "+ passlength ;
			}