'username = Environment("UserName")
'MsgBox username


SystemUtil.Run Environment("BrowserType"),Environment("URL")
'ExecuteFile Environment("ObjectRepositoryVBSPath")
LoadFunctionLibrary Environment("ObjectRepositoryVBSPath")
'Environement.LoadFunctionLibrary Environment("ObjectRepositoryVBSPath")
'LoadFunctionLibrary "C:\Path\To\YourFile.vbs"
If objLoginPageError.Exist(4) Then
       waitTime(12) 
	objusername.Set  "abc"
	objPassword.Set "abc"
	objLogin.Click
 End if 
Browser("Mindmajix - Login").Page("Mindmajix - Login").WebEdit("otp").WaitProperty   @@ script infofile_;_ZIP::ssf1.xml_;_
RunAction "ControllerScript", oneIteration


array1 = array("aV","re")
num1 =  array1(0)
msgbox num1

Dim arr()




stringnew = "12wer5ty1257 124ufdgey fsey 35tergdf"
split_one = split(stringnew,"1",4,0)
arraycnt = UBound(split_one) - LBound(split_one) +1
For i = 1 To arraycnt-1 Step 1
	expr1 = split_one(i)
	msgbox expr1
	If instr(1, stringnew, expr1) > 0 Then
		Msgbox "Substring exist in the main string"
		Exit for
	else
		Msgbox "No Matching Data"
	End If
Next



Function One() 
      
      If count >1  Then
      	Call One
      End If
	count = count +1
End Function




Function Fibonacci(n)
    If n = 0 Then
        Fibonacci = 0 ' Base case: First Fibonacci number is 0
    ElseIf n = 1 Then
        Fibonacci = 1 ' Base case: Second Fibonacci number is 1
    Else
        Fibonacci = Fibonacci(n - 1) + Fibonacci(n - 2) ' Recursive call
    End If
End Function

' Example usage
Dim num, result
num = 7
result = Fibonacci(num)
MsgBox "Fibonacci number at position " & num & " is: " & result

