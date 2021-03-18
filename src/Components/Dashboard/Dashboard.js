import React from 'react';


function Dashboard() {
    return (
        <div className="dashboard__wrapper">
        <div><strong><h1>Dashboard</h1></strong></div>
            <div>
		<table border="1px" height="100%" width="100%">
			<tr height="15%">
				<td width="10%">Image</td>
				<td colspan="2">header</td>
			</tr>
			<tr>
				<td rowspan="2" width="20%">
					<div class="sidebar">
						<ul>
							<li><a href className="active">Dashboard</a></li>
							<li><a href className="active">Customers</a></li>
							<li><a href>Sales Pakages</a></li>
							<li><a href>Delivery Challans</a></li>
							<li><a href>Invoice</a></li>
							<li><a href>Payements Recieved</a></li>
							<li><a href>Returns</a></li>
							<li><a href>Vendors</a></li>
							<li><a href>Purchase Orders</a></li>
							<li><a href>Bills</a></li>
							<li><a href>Payment Made</a></li>
							<li><a href>Vendor Credit</a></li>
							<li><a href>Integrations</a></li>
							<li><a href>Report</a></li>
							<li><a href>Documents</a></li>
						</ul>
					</div>
				</td>
				<td height="14%">
					<div className="d2">
						<div id="dd2"> 
							<a href><h1>Dashboard</h1></a>
						</div>
						<div id="dd2">
							<a href><h1>Recent Update</h1></a>
						</div>
					</div>




					{/* <div>
					<div className="dashboardRow2">
						<a >
							<div>
								<h1>Dashbord</h1>
							</div>
							<div>
								<h1>Recent Updates</h1>
							</div>
						</a>
					</div>	
					<div className="dashboardRow2">
						<a >
							<h1>Recent Updates</h1>
						</a>
					</div>
					</div> */}
				</td>
				{/* <td>
					<div id="dashboardRow3">
						<a >
							<h1>Recent updates<h1>
						</a>
					</div>
				</td> */}
			</tr>
			<tr>
					<td colspan="2">
						<div id="salesActivity">
							<h2>Sales Activity</h2>
							<a href>
								<div className="sales">0 <br/> Qty <br/><br/> To be shipped </div>
							</a>
							<a href>
								<div className="sales">0 <br/> Qty <br/><br/> To be shipped </div>
							</a>
							<a href>
								<div className="sales">0 <br/> Qty <br/><br/> To be shipped </div>
							</a>
							<a href>
								<div className="sales">0 <br/> Qty <br/><br/> To be shipped </div>
							</a>

							
						</div>
					</td>
			</tr>
			<tr>
				<td colspan="3" height="5%">footer</td>
			</tr>
		</table>
	</div>
        </div>
    )
}

export default Dashboard
