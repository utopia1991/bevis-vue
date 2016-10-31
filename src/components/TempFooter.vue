<template>
	<footer class="footer-wrap">
		<div class="footer">
			<div class="footer-service">
				<ul class="service clearfix">
					<li class="service-item">
						<a href="//www.mi.com/service/exchange#repaire" target="_blank">
							<span class="icon"><i class="fa fa-gavel"></i></span>
							1小时快修服务
						</a>
					</li>
					<li class="service-item">
						<a href="//www.mi.com/service/exchange#back" target="_blank">
							<span class="icon"><i class="fa fa-history"></i></span>
							7天无条件退货
						</a>
					</li>
					<li class="service-item">
						<a href="//www.mi.com/service/exchange#free" target="_blank">
							<span class="icon"><i class="fa fa-history"></i></span>
							15天免费换货
						</a>
					</li>
					<li class="service-item">
						<a href="//www.mi.com/service/exchange#mail" target="_blank">
							<span class="icon"><i class="fa fa-gift"></i></span>
							满150元包邮
						</a>
					</li>
					<li class="service-item">
						<a href="//www.mi.com/static/maintainlocation/" target="_blank">
							<span class="icon"><i class="fa fa-location-arrow"></i></span>
							520余家售后网点
						</a>
					</li>
				</ul>
			</div>
			<div class="footer-info">
				<ul class="footer-content clearfix">
					<li class="footer-item">
						<article class="col-links">
							<h3>
								帮助中心
							</h3>
							<p>
								<a href="//www.mi.com/service/account/register/" target="_blank">账户管理</a>
							</p>
							<p>
								<a href="//www.mi.com/service/buy/buytime/" target="_blank">购物指南</a>
							</p>
							<p>
								<a href="//www.mi.com/service/order/sendprogress/" target="_blank">订单操作</a>
							</p>
						</article>
					</li>
					<li class="footer-item">
						<article class="col-links">
							<h3>
								服务支持
							</h3>
							<p>
								<a href="//www.mi.com/service/exchange" target="_blank">售后政策</a>
							</p>
							<p>
								<a href="http://fuwu.mi.com/" target="_blank">自助服务</a>
							</p>
							<p>
								<a href="http://xiazai.mi.com/" target="_blank">相关下载</a>
							</p>
						</article>
					</li>
					<li class="footer-item">
						<article class="col-links">
							<h3>
								线下门店
							</h3>
							<p>
								<a href="//www.mi.com/c/xiaomizhijia/" target="_blank">小米之家</a>
							</p>
							<p>
								<a href="//www.mi.com/static/maintainlocation/" target="_blank">服务网点</a>
							</p>
							<p>
								<a href="//www.mi.com/static/familyLocation/" target="_blank">零售网点</a>
							</p>
						</article>
					</li>
					<li class="footer-item">
						<article class="col-links">
							<h3>
								关于小米
							</h3>
							<p>
								<a href="//www.mi.com/about" target="_blank">了解小米</a>
							</p>
							<p>
								<a href="http://hr.xiaomi.com/" target="_blank">加入小米</a>
							</p>
							<p>
								<a href="//www.mi.com/about/contact" target="_blank">联系我们</a>
							</p>
						</article>
					</li>
					<li class="footer-item">
						<article class="col-links">
							<h3>
								关注我们
							</h3>
							<p>
								<a href="http://e.weibo.com/xiaomishouji" target="_blank">新浪微博</a>
							</p>
							<p>
								<a href="http://xiaoqu.qq.com/mobile/share/index.html?url=http%3A%2F%2Fxiaoqu.qq.com%2Fmobile%2Fbarindex.html%3Fwebview%3D1%26type%3D%26source%3Dindex%26_lv%3D25741%26sid%3D%26_wv%3D5123%26_bid%3D128%26%23bid%3D10525%26from%3Dwechat" target="_blank">小米部落</a>
							</p>
							<p>
								<a href="javascript:void(0)" target="_blank">官方微信</a>
							</p>
						</article>
					</li>
					<li class="footer-item">
						<article class="col-links">
							<h3>
								特色服务
							</h3>
							<p>
								<a href="//order.mi.com/queue/f2code" target="_blank">F码通道</a>
							</p>
							<p>
								<a href="//www.mi.com/mimobile/" target="_blank">小米移动</a>
							</p>
							<p>
								<a href="//order.mi.com/misc/checkitem" target="_blank">防伪查询</a>
							</p>
						</article>
					</li>
					<li class="footer-last-item">
						<div class="col-content">
							<h3 class="phone-number">400-100-5678</h3>
							<p class="phone-desc">
								周一至周日 8:00-18:00<br/>（仅收市话费）
							</p>
							<a href="//www.mi.com/service/contact" target="_blank">
								<span class="server-btn">
									<i></i>
									24小时在线客服
								</span>
							</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<style>
.footer {
	width: 1226px;
	height: auto;
	margin: 0 auto;
	padding-bottom: 20px;
}

.footer-service {
	padding: 27px 0;
	border-bottom: 1px solid #e0e0e0;
}
.service {
	.service-item {
		float: left;
		width: 245px;
		height: 27px;
		line-height: 27px;
		font-size: 16px;
		color: #616161;
		padding: 0 40px;
		box-sizing: border-box;
		border-right: 1px solid #e0e0e0;
		&:nth-last-child(1) {
			border-right: 0;
		}
		.icon {
			display: inline-block;
			height: 27px;
			line-height: 27px;
			font-size: 24px;
			margin-right: 10px;
		}
	}
}
.footer-info {
	padding: 40px 0;
}

.footer-content {
	.footer-item {
		float: left;
		width: 160px;
		height: 120px;
		a {
			text-decoration: none;
			color: #333;
		}
		&:nth-last-child(2) {
			padding-right: 20px;
			border-right: 1px solid #e0e0e0;
		}
		h3 {
			font-size: 14px;
			font-weight: normal;
			margin-bottom: 26px;
		}
		p {
			font-size: 12px;
			margin-top: 10px;
		}
	}
	.footer-last-item {
		float: left;
		.col-content {
			margin-left: 40px;
			.phone-number {
				margin: 0 0 5px;
				font-size: 22px;
				text-align: center;
				margin-bottom: 5px;
				color: #ff6700;
			}
			.phone-desc {
				font-size: 12px;
				line-height: 1.5;
				text-align: center;
				color: #616161;
			}
			.server-btn {
				display: block;
				width: 120px;
				height: 30px;
				line-height: 30px;
				font-size: 12px;
				text-align: center;
				margin: 0 auto;
				border: 1px solid #ff6700;
				color: #ff6700;
				cursor: pointer;
				&:hover {
					background: #ff6700;
					color: #fff;
				}
			}
		}
	}
}

</style>
