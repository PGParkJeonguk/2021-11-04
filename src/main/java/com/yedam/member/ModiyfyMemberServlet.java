package com.yedam.member;

import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;

@WebServlet("/ModiyfyMemberServlet")
public class ModiyfyMemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public ModiyfyMemberServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");
		// 삭제기능
		String deleted = request.getParameter("id");

		MemDAO dao = new MemDAO();

		Gson gson = new GsonBuilder().create(); // json반환.
		JsonObject jsonObj = new JsonObject(); // json 데이터 만들기.

		if (dao.deleteMember(deleted)) {
			jsonObj.addProperty("retCode", "OK");
			jsonObj.addProperty("user_id", deleted);
		} else {
			jsonObj.addProperty("retCode", "NG");
			jsonObj.addProperty("retMsg", "오류발생, \n담장자에게 문의하세요.");
		}
		response.getWriter().println(gson.toJson(jsonObj));
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");

		// 데이터 수정기능 및 화면변경.
		String userId = request.getParameter("id");
		String userName = request.getParameter("nm");
		String userBirth = request.getParameter("br");
		String userAddr = request.getParameter("ad");
		String userPhone = request.getParameter("ph");
		String userGen = request.getParameter("gn");

		MemberVO vo = new MemberVO();
		vo.setAddress(userAddr);
		vo.setBirth_date(userBirth);
		vo.setGender(userGen);
		vo.setPhone(userPhone);
		vo.setUser_id(userId);
		vo.setUser_name(userName);

		MemDAO dao = new MemDAO();
		Map<String, Object> resultmap = dao.updateMember(vo);

		//json 포맷을 형성.
		Gson gson = new GsonBuilder().create(); // json반환.
		response.getWriter().println(gson.toJson(resultmap));

	}
}
