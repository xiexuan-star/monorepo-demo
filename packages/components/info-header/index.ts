import { COMPONENT_NAMESPACE } from '@/global/variable';
import { SFCWithInstall } from '@/types';
import { safeComponentRegister } from '@/utils';
import type { App } from 'vue';
import script from './src/InfoHeader.vue';

const InfoHeader = script as SFCWithInstall<typeof script>;

InfoHeader.install = function (app: App) {
	safeComponentRegister(app, InfoHeader, COMPONENT_NAMESPACE + 'InfoHeader');
};

export default InfoHeader;
