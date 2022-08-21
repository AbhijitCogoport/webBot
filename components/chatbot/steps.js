export default [
	{
		id: '1',
		message: 'What is your name?',
		trigger: '2',
	},
	{
		id: '2',
		user: true,
		trigger: '3',
	},
	{
		id: '3',
		message: 'Hi {previousValue}, nice to meet you!',
		trigger: '4',
	},
	{
		id: '4',
		message: 'Select any service to proceed',
		trigger: '5',
	},
	{
		id: '5',
		options: [
			{ value: "Products", label: 'Products', trigger: '7' },
			{ value: "Services", label: ' Services', trigger: '10' },
			{ value: "other", label: 'Other',  trigger: '6'},
		],
	},
	{
		id: '6',
		message: 'Sorry! we are not operating {previousValue} right now ',
		trigger: '4',
	},
	{	
		id: '7',
		message: 'Please select one of the Product',
		trigger:'8',
	},
	{	
		id: '8',
		options: [
			{ value: "Search Freight Rates", label: 'Search Freight Rates', trigger: '9'},
			{ value: "Book Shipping Containers", label: 'Book Shipping Containers', trigger: '9'},
			{ value: "Book Air ShipmentsTrack Containers", label: 'Book Air ShipmentsTrack Containers', trigger: '9'},
			{ value: "Book Air ShipmentsTrack Containers", label: 'Book Air ShipmentsTrack Containers', trigger: '9'},
		],

	},
	{
		id: '9',
		message: 'Awesome! We will be connecting you to our {previousValue} service executive!',
		end: true,
	},
	{
		id:'10',
		options: [
			{ value: "FCL Freight", label: 'FCL Freight', trigger: '11'},
			{ value: "LCL Freight", label: 'LCL Freight', trigger: '11'},
			{ value: "Air Cargo", label: 'Air Cargo', trigger: '11'},
			{ value: "Trucking", label: 'Trucking', trigger: '11'},
			{ value: "Haulage", label: 'Haulage', trigger: '11'},
			{ value: "Customs Clearance", label: 'Customs Clearance', trigger: '11'},
		]
	},
	{
		id: '11',
		// inputAttributes: {
		// 	type : 'text',
		// 	name : 'email_id',
		// },
		message:'Enter your Email Id',
		trigger:'12',
	},
	{
		id: '12',
		user : true,
		trigger: '13',
	},
	{
		id: '13',
		message: 'Awesome! We will be connecting you',
		end: true,
	},
];