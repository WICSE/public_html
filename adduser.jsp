
<%@ page import="user.*"%>
<%@ page import="java.io.*"%>
<jsp:include page="users.html" >

<html>
<body>

<%
String newusername= request.getParameter("username");
String newpassword1= request.getParameter("password1");
String newpassword2= request.getParameter("password2");
String newemail= request.getParameter("email");

if (newemail.equals("") || (newemail.indexOf('@') == -1)) {%>
        window.location= "signup.jsp";
<%
    }
    if (newusername.equals("")) {%>
        window.location= "signup.jsp";
<%
    }
    if (newpassword1.equals("") ) {%>
        window.location= "signup.jsp";
<%
    }
    if (!newpassword1.equals("") && (newpassword2.equals("") ||
        !newpassword1.equals(newpassword2))) {%>
        window.location= "signup.jsp";
<%
    }
    else %> window.location= "confirmsubmit.html";<%

String file = "users.html";
 FileWriter filewriter = new FileWriter(file, true);
            filewriter.write("<tr><td>" + newusername + "<tr><td>");
            filewriter.write("<tr><td>" + newpassword1 + "<tr><td>");
            filewriter.write("<tr><td>" + newemail + "<tr><td>");
            filewriter.close();

%>

</body>
</html>