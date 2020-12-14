

//分拣 = 
export class Parameter{
	constructor(itemInfo){
		this.itemOrder = itemInfo.itemOrder
		this.content = itemInfo.content
		this.items = itemInfo.items
		this.analyze = itemInfo.analyze
	}
}



export class Advantage{
	constructor(itemInfo){
		this.softFine = itemInfo.softFine
		this.hardFine = itemInfo.hardFine
		this.companyFine = itemInfo.companyFine
		this.serGuarantee = itemInfo.serGuarantee
	}
}

