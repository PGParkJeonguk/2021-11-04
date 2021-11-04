package com.yedam.member;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;

@WebServlet("/GetMemberJsonServ")
public class GetMemberJsonServ extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public GetMemberJsonServ() {
		super();

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/json;charset=UTF-8");
		PrintWriter out = response.getWriter();
		// {"name" : "Hongkildong", "age":20 , "phone":"010-1234-5678"}
		// "[{"id":"?","name":"?","birth":"?","gender":"?"},{},{}]"
		MemDAO dao = new MemDAO();
		List<MemberVO> list = dao.getMemberList();
//		int cnt = list.size();
//		out.println("[");
//		for(int i = 0; i<cnt; i++) {
//			out.println("{\"id\":\""+list.get(i).getUser_id()
//					+"\",\"name\":\""+list.get(i).getUser_name()
//					+"\",\"birth\":\""+list.get(i).getBirth_date()
//					+"\",\"gender\":\""+list.get(i).getGender()
//					+"\"}");
//			if(i != cnt -1) {
//				out.println(",");
//			}
//		}
//		out.println("]");
		Gson gson = new GsonBuilder().create();
		out.println(gson.toJson(list));
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");
		// 입력하는 기능
		MemDAO dao = new MemDAO();
		String userId = request.getParameter("i");
		String userName = request.getParameter("n");
		String address = request.getParameter("a");
		String phone = request.getParameter("p");
		String birth = request.getParameter("b");
		String gender = request.getParameter("g");

		MemberVO vo = new MemberVO();
		vo.setUser_id(userId);
		vo.setUser_name(userName);
		vo.setAddress(address);
		vo.setPhone(phone);
		vo.setBirth_date(birth);
		vo.setGender(gender);

		Gson gson = new GsonBuilder().create(); // json반환.
		JsonObject jsonObj = new JsonObject(); // json 데이터 만들기.

//	      {"retCode":"OK", "retVal": {vo}}
//	      {"retCode":"NG", "retVal": "담당자에게 문의하십시오!!"}

		if (dao.insertMember(vo)) {
			jsonObj.addProperty("retCode", "OK");
			jsonObj.addProperty("user_id", vo.getUser_id());
			jsonObj.addProperty("user_name", vo.getUser_name());
			jsonObj.addProperty("birth_date", vo.getBirth_date());
			jsonObj.addProperty("address", vo.getAddress());
			jsonObj.addProperty("phone", vo.getPhone());
			jsonObj.addProperty("gender", vo.getGender());

		} else {
			jsonObj.addProperty("retCode", "NG");
			jsonObj.addProperty("retMsg", "오류발생, \n담장자에게 문의하세요.");
		}
		response.getWriter().println(gson.toJson(jsonObj));
	}

}
