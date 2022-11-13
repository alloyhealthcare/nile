<template>
  <space-vue spaceTitle="Appointments" spaceMeta="Test" :hasSidebarActions="true">
    <template #spaceSidebarList>
      <item-card
        v-for="appointments in $page.encounter.user.appointments"
        :key="appointments.id"
        item_type="appointment"
        :appointmentTime="appointments.apptTime | luxon"
        :path="appointments.path"
        :itemHeading="appointments.patient.name"
        :status="appointments.status"
      />
    </template>
    <template #spaceSidebarActions>
      <t-button variant="secondary">Test</t-button>
    </template>
    <template slot="page-content">
      <patient-overview-module
        :moduleInfo="{ title: 'Now', subTitle: $page.encounter.room }"
        :patient="$page.encounter.patient"
        :encounter="$page.encounter"
        :primaryButton="primaryButton"
        :secondaryButton="{ path: $page.encounter.path + 'intake/vitals', text: 'Review' }"
        :tertiaryButton="{ path: $page.encounter.path + 'note', text: 'Begin' }"
      />
      <medication-list-module
        :moduleInfo="{ title: 'Medication List', subTitle: $page.encounter.patient.name }"
        :patient="$page.encounter.patient"
        :medicationList="$page.encounter.patient.medicationsList"
        :encounter="$page.encounter"
        :primaryButton="{ text: 'Prescribe', path: $page.encounter.path }"
        :secondaryButton="{ path: $page.encounter.path + 'intake/vitals', text: 'Review' }"
        :tertiary-button="{ text: 'Close', value: false }"
        v-on:tertiary-button-action="(value) => (moduleIsVisible = value)"
        v-on:add-medication-detail="(value) => (medicationDetail = value)"
        :isVisible="false"
      />
      <div v-for="medication in $page.encounter.patient.medicationsList" :key="medication.id">
        <medication-detail-module
          :moduleInfo="{ title: medication.name, subTitle: 'Medication' }"
          :patient="$page.encounter.patient"
          :medicationItem="medication"
          :encounter="$page.encounter"
          :primaryButton="{ text: 'Refill', path: $page.encounter.path }"
          :secondaryButton="{ path: $page.encounter.path + 'intake/vitals', text: 'Change Pharmacy' }"
          :tertiary-button="{ text: 'Close', action: null }"
          v-on:tertiary-button-action="(value) => (medicationDetail = value)"
          :isVisible="true"
        />
      </div>
      <div class="w-96 flex-none">
        <div class="mb-12">
          <div class="bg-white rounded-md border border-slate-200">Search</div>
        </div>
        <div class="mb-4">
          <span class="font-semibold text-slate-500">Open...</span>
        </div>
        <div class="grid grid-cols-2 w-full mb-8">
          <t-button variant="buttonXL">Last Appointment</t-button>
          <t-button variant="buttonXL" @click="moduleIsVisible = !moduleIsVisible">Medications</t-button>
          <t-button variant="buttonXL">Allergies</t-button>
          <t-button variant="buttonXL">Results</t-button>
        </div>
        <div class="mb-4">
          <span class="font-semibold text-slate-500">Create...</span>
        </div>
        <div class="grid grid-cols-2 w-full mb-8">
          <t-button variant="buttonXL">Send Message</t-button>
          <t-button variant="buttonXL">Create Order</t-button>
          <t-button variant="buttonXL">Refill</t-button>
          <t-button variant="buttonXL">Referral</t-button>
        </div>
      </div>
    </template>
    <template #spaceNav>
      <div>
        <t-button
          v-for="(appointments, index) in nextItem"
          :key="appointments.id"
          v-bind:index="index"
          variant="buttonXl"
          :to="appointments.path"
          class="hidden first:block space-x-4"
          ><span class="font-semibold">Next</span>
          <span>{{ appointments.patient.name }}</span>
          <font-awesome-icon icon="fa-regular fa-arrow-down" />
        </t-button>
      </div>
      <div v-if="previousItem">
        <t-button
          v-for="(appointments, index) in previousItem"
          :key="appointments.id"
          v-bind:index="index"
          variant="buttonXl"
          :to="appointments.path"
          class="hidden last:block"
        >
          <span class="font-semibold">{{ appointments.apptTime | luxon }}</span>
          {{ appointments.patient.name }}
          <font-awesome-icon icon="fa-regular fa-arrow-up" />
        </t-button>
      </div>
    </template>
  </space-vue>
</template>

<page-query>
query ($id: ID!) {
  encounter (id: $id) {
    apptTime
    status
    path
    room
    chiefComplaint
    type
    vitals {
            id
    heartRate
    bloodPressure
    pulseOx
    temperature
    weight
    }
    user {
      name
      appointments(sort: [{by: "apptTime", order: ASC}]) {
        id
        apptTime
        path
        status
        patient {
            name
        }
      }
    }
    patient {
      name
      age
      sex
      pronouns
      path
      medicationsList {
        name
        id
        doseAmount
        doseUnit
        frequency
        deliveryMethod
        linkedCondition {
          name
          id
        }
      }
      problemsList {
        id
        name
      }
    }
  }
}
</page-query>

<script>
import SpaceVue from "../../layouts/Space.vue";
import ItemCard from "../../components/Cards/ItemCard.vue";
import ModuleCardBase from "../../components/Cards/Modules/ModuleBase/ModuleCardBase.vue";
import PatientOverviewModule from "../../components/Cards/Modules/ModuleTemplates/PatientOverviewModule.vue";
import MedicationListModule from "../../components/Cards/Modules/ModuleTemplates/MedicationListModule.vue";
import MedicationDetailModule from "../../components/Cards/Modules/ModuleTemplates/MedicationDetailModule.vue";

export default {
  components: {
    SpaceVue,
    ItemCard,
    ModuleCardBase,
    PatientOverviewModule,
    MedicationListModule,
    MedicationDetailModule,
  },
  data() {
    return {
      module: {
        notePath: "/note",
      },
      moduleIsVisible: false,
    };
  },
  computed: {
    primaryButton: {
      get() {
        if (this.$page.encounter.status == "Roomed") {
          return {
            path: this.currentPath + "note",
            text: "Begin",
          };
        } else {
          return {
            path: this.currentPath + "intake/vitals",
            text: "Begin Intake",
          };
        }
      },
      /*set(buttonPath) {
        if (this.currentStatus == "Roomed") {
          this.buttonPath = $page.encounter.path + "note";
        } else {
          this.buttonPath = $page.encounter.path + "intake/vitals";
        }
      },*/
    },
    currentMedicationDetail() {
      return this.$page.encounter.patient.medicationsList.id;
    },
    currentStatus() {
      return this.$page.encounter.status;
    },
    currentPath() {
      return this.$page.encounter.path;
    },
    currentItem() {
      return this.$page.encounter;
    },
    userItems() {
      return this.$page.encounter.user.appointments;
    },
    previousItem() {
      return this.userItems.filter((appointment) => {
        return appointment.apptTime != this.currentItem.apptTime && appointment.apptTime < this.currentItem.apptTime;
      });
    },
    nextItem() {
      return this.userItems.filter((appointment) => {
        return appointment.apptTime != this.currentItem.apptTime && appointment.apptTime > this.currentItem.apptTime;
      });
    },
  },
  methods: {},
};
</script>

<style>
.active {
  opacity: 100%;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
