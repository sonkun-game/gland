<template>
    <div>
        <button @click="Common.toggleModal(keyId)"
            class="text-white w-100 bg-gland font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center border border-gray-50"
            type="button">Dropdown hover</button>
        <!-- Dropdown menu -->
        <div :id="keyId"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                    <a href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { Common } from '../../../plugins/common';
import { v4 as uuidv4 } from 'uuid';

export default {
    name: 'DropmenuComponent',
    data() {
        return {
            keyId: uuidv4(),
        }
    }
}
</script>