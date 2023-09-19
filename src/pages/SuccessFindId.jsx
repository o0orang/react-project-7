import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import pb from "@/api/pocketbase";
import bigcheck from "/assets/bigcheck.svg";
import S from "./successfindid.module.css";
import idStore from "@/store/idStore";
import tvingLogo from "/assets/tving-login.svg";

function SuccessFindId() {
	const navigate = useNavigate();
	const { idState, findId } = idStore();

	const handleLogin = () => {
		navigate("/signin");
	};
	console.log("idStore: ", idStore);

	return (
		<>
			<Helmet>
				<title>FindId - Taing</title>
			</Helmet>
			<div className={S.content}>
				<div className={S.contentWrapper}>
					<div className={S.iconSection}>
						<img
							src={bigcheck}
							alt="로그인 찾기 성공 이미지"
							className={S.checkLogo}
						/>
					</div>
					<div className={S.textSection}>
						<h1 className={S.title}>입력하신 정보와 일치하는 결과입니다</h1>
						<div className={S.subtitleWrapper}>
							<div className={S.description1}>개인정보 보호를 위해</div>
							<span className={S.description2}>
								아이디 또는 이메일의 일부만 제공합니다.
							</span>
						</div>

						<div
							className={S.idForm}
							style={{
								backgroundImage: `url(${tvingLogo})`,
								backgroundPosition: 30,
							}}
						>
							{idState.id}{" "}
						</div>
						<span className={S.description3}>
							※SNS 회원은 해당 SNS 아이디가 아닌 티빙 가입 시 등록한 이메일을
							알려드립니다.
						</span>
					</div>
					<div>
						<button
							type="button"
							className={S.loginButton}
							onClick={handleLogin}
						>
							로그인 하러 가기
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default SuccessFindId;
