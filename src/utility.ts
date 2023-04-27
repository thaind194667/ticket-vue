import moment from 'moment';

const mergeText = (a: String, b: String) => {
	return `${a}\xa0\xa0\xa0${b}`;
};

const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'];

const dateFormatDayOFWeek = (date: string) => {
	var momentDate = moment(date);
	return `${momentDate.format('YYYY/MM/DD')} (${dayOfWeek[momentDate.day()]})`;
};

const dateFormat = (date: string) => {
	var momentDate = moment(date);
	return `${momentDate.format('YYYY/MM/DD HH:mm')}`;
};

const moneyFormat = (money: string) => {
	return money.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

const defaultTicketSettingInformations = {
	IdTypeTicket: 0,
	NmTypeTicket: 'Test',
	TypeSeats: [
		{
			IdTypeSeat: 15,
			NmTypeSeat: 'ピットビューイングパス',
			TypeTicket: 0,
			FlgInvitationTicket: 0,
			CategorySellSetting: [
				{
					IdCategory: 200,
					IdRaceTicketDetail: 517,
					IdTypeTicket: 6,
					IdTypeSeat: 15,
					NmTypeSeat: 'ピットビューイングパス',
					NmTypeTicket: 'イベント券',
					CategorySeat: 'faaa',
					AdjustedPrice: 1000,
					GenerateFee: 200,
					DtSellStart: '2023-03-27T07:10:00',
					DtSellEnd: '2023-04-30T07:11:00',
					DtPublicStart: '2023-03-21T11:23:00',
					DtPublicEnd: '2023-05-31T13:10:00',
					DtGenerateElectricTicket: '2023-04-30T07:19:00',
					FlgPublic: 1,
					CntMaxAtOnce: 100,
					Price: 13333333,
					FlgMedia: 1,
					NmMedia: '物理',
				},
			],
		},
	],
};

const newDefaultRow = {
	IdCategory: 0,
	FlgCustomer: 0,
	NmCategory: '',
	SaleRate: 0,
	FlgPayAfter: 0,
	TxtNote: null,
	CategoryCustomers: [],
	TicketSettingInformations: [
		{
			...defaultTicketSettingInformations,
		},
	],
	CategoryLotteryGroups: [],
	status: 'new',
};

const newDefaultTicketPurchaseRow = {
	PurchaseID: '',
    CustomerID: '',
    CustomerName: '',
    Category: '',
    PurchasePeriod: '',
    SaleMethod: 0,
    PaymentMethod: 0,
    PaymentStatus: 0, 
	Status: 'default',
}

export { mergeText, dateFormatDayOFWeek, dateFormat, moneyFormat, newDefaultRow, defaultTicketSettingInformations, newDefaultTicketPurchaseRow };
