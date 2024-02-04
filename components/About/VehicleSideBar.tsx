import Link from "next/link";
import React from "react";

const VehicleSideBar = () => {
	return (
		<div className="mt-24 flex min-h-96 flex-col bg-gray-50 text-gray-800 antialiased">
			<div className="flex h-full w-64 flex-col border-r bg-white">
				<div className="flex-grow overflow-y-auto overflow-x-hidden">
					<ul className="flex flex-col space-y-1 py-4">
						<li className="px-5">
							<div className="flex h-8 flex-row items-center">
								<div className="text-sm font-light tracking-wide text-gray-500">Type</div>
							</div>
						</li>
						<li>
							<Link
								href="/about?type=alphard"
								className="relative flex h-11 flex-row items-center border-l-4 border-transparent pr-6 text-gray-600 hover:border-indigo-500 hover:bg-gray-50 hover:text-gray-800 focus:outline-none"
							>
								<span className="ml-4 inline-flex items-center justify-center">Icon</span>
								<span className="ml-2 truncate text-sm tracking-wide">Alphard</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default VehicleSideBar;
