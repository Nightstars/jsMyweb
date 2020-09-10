var isDataok=false;
function Submit1_onclick() {
          return isDataok;
        }
function onchange(obj)
{
	try
	{
		if(obj=="UserName")
		{
			var userobj=document.getElementById(obj);
			var user=new String(userobj.value);
			if(user.length>20||(userobj.value=""))
			{
				alert("用户名不符合规则：超过20字符或为空！");
				userobj.value="";
				isDataok=false;
			}
		}
		else if(obj=="password")
		{
			var pwdobj=documnent.getElementById(obj);
			var pwd=new Stirng(pwdobj.vlaue);
			if(pwd.lenght>20||pwd=="")
			{
				alert("密码不符合规则：超过20字符或为空！");
				pwdobj.value="";
				isDataok=false;
				return;
			}
			for(i=0;i<pwd.length;i++)
			{
				for(j<0;j<10;j++)
				{
					if(pwd.charAt(i)!=j)
					{
						if(j==9)
						{
							alert("密码不符合规则：包含非数字字符！");
							pwdobj.value="";
							isDataok=false;
							return;
						}
						else
						{
							continue;
						}
					}
					else 
					{
						break;
					}
				}
			}
			isDataok=true;
		}
	}
	catch(e)
	{
		alert("对不起，有错误发生："+e.description);
	}
}
