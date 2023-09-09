import Vue from 'vue';

import SelectVue from '../components/Common/Select/Select.vue';
Vue.component('SelectVue',SelectVue);

// Text
import ProfileInfo from '../components/Common/Info/ProfileInfo.vue';
Vue.component('ProfileInfo',ProfileInfo);

// Tab Component
import TabListHeader from '../components/Common/Tab/TabListHeader.vue';
import TabItem from '../components/Common/Tab/TabItem.vue';
import SubTabItem from '../components/Common/Tab/SubTabItem.vue';
import TabContainer from '../components/Common/Tab/TabContainer.vue';

Vue.component('TabListHeader',TabListHeader);
Vue.component('TabItem',TabItem);
Vue.component('SubTabItem',SubTabItem);
Vue.component('TabContainer',TabContainer);

// Button
import XButton from '../components/Common/Button/XButton.vue'
import CloseOrSave from '../components/Common/Modal/CloseOrSave.vue';
import Dropdown from '../components/Common/Button/Dropdown.vue';
import Collapse from '../components/Common/Button/Collapse.vue'

Vue.component('CloseOrSave',CloseOrSave);
Vue.component('XButton',XButton);
Vue.component('Dropdown',Dropdown);
Vue.component('Collapse',Collapse);

// Modal
import ModalContainer from '../components/Common/Modal/ModalContainer.vue';
import ModalHeader from '../components/Common/Modal/ModalHeader.vue';
import ShowModal from '../components/Common/Button/ShowModal.vue'
import ConfirmModal from '../components/Common/Modal/ConfirmModal.vue';

Vue.component('ModalContainer',ModalContainer);
Vue.component('ModalHeader',ModalHeader);
Vue.component('ShowModal',ShowModal);
Vue.component('ConfirmModal',ConfirmModal);

// Table Component
import Cell from '../components/Common/Table/Cell.vue';
import Row from '../components/Common/Table/Row.vue';
import CrudTable from '../components/Custom/Table/CrudTable.vue';

Vue.component('Cell',Cell);
Vue.component('Row',Row);
Vue.component('CrudTable',CrudTable);

// Input
import InputField from '../components/Common/Input/InputField.vue'

Vue.component('InputField',InputField);
