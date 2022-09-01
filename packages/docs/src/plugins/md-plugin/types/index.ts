export type ComponentInfo = {
	alias: string;
	path: string;
	title?: string;
	description?: string;
	code: string;
};

export type ScriptInfo = Partial<Record<'imports' | 'components' | 'varDeclares' | 'setupReturns', string[]>>;

type MdParserResult = { template: string; scripts: ScriptInfo };

export interface MdParser {
	(template: string, id: string): MdParserResult;
}

interface SFCInfo {
	name: string;
	description: string;
}

export interface SFCProps extends SFCInfo {
	type: string;
	defaultValue: string;
}

export interface SFCSlots extends SFCInfo {}

export interface SFCEmits extends SFCInfo {}

export interface SFCExpose extends SFCInfo {
	params: string;
}

export interface SFCTableContext {
	props: SFCProps[];
	emits: SFCEmits[];
	expose: SFCExpose[];
	slots: SFCSlots[];
}
