<script lang="ts" setup>
import { allArrays, getRandomInt, randomElement } from '~/server/database'

const qualities = allArrays.qualities
const elements = allArrays.elements
const forms = allArrays.forms
const weapons = allArrays.weapons
const itemTraits = allArrays.itemTraits

const randomQuality = useState('quality', () => randomElement(qualities))
const randomElementRef = useState('element', () => randomElement(elements))
const randomForm = useState('form', () => randomElement(forms))
const randomWeapon = useState('weapon', () => randomElement(weapons))
const randomItemTrait = useState('itemTrait', () => randomElement(itemTraits))

const parts = ['Quality', 'Element', 'Form', 'Weapon', 'Trait']
const partToChange = ref(parts[0])

function ReRoll() {
  randomQuality.value = randomElement(qualities)
  randomElementRef.value = randomElement(elements)
  randomForm.value = randomElement(forms)
  randomWeapon.value = randomElement(weapons)
  randomItemTrait.value = randomElement(itemTraits)
}
function ReRollPart() {
  switch (partToChange.value) {
    case 'Quality':
      randomQuality.value = randomElement(qualities)
      break
    case 'Element':
      randomElementRef.value = randomElement(elements)
      break
    case 'Form':
      randomForm.value = randomElement(forms)
      break
    case 'Weapon':
      randomWeapon.value = randomElement(weapons)
      break
    case 'Trait':
      randomItemTrait.value = randomElement(itemTraits)
      break
  }
}
</script>

<template>
  <main class="mx-auto max-w-2xl">
    <h1 class="text-2xl font-black underline">
      Weapon
    </h1>
    <section>
      <dl class="flex flex-wrap gap-8">
        <div>
          <dt>Quality</dt>
          <dd>{{ randomElement(qualities) }}</dd>
        </div>
        <div>
          <dt>Element</dt>
          <dd>{{ randomElement(elements) }}</dd>
        </div>
        <div>
          <dt>Form</dt>
          <dd>{{ randomElement(forms) }}</dd>
        </div>
        <div>
          <dt>Weapon</dt>
          <dd>{{ randomElement(weapons) }}</dd>
        </div>
        <div>
          <dt>Trait</dt>
          <dd>{{ randomElement(itemTraits) }}</dd>
        </div>
      </dl>
      <div class="mt-6 bg-indigo-200 p-4 p4 text-slate-300 font-bold space-x-4">
        <button class="rounded bg-indigo-500 px-2 py-1" @click="ReRoll">
          Reroll
        </button>
        <button class="rounded bg-indigo-500 px-2 py-1" @click="ReRollPart">
          Reroll {{ partToChange }}
        </button>
        <select v-model="partToChange" class="rounded bg-indigo-500 px-2 py-1">
          <option v-for="part in parts" :key="part" :value="part">
            {{ part }}
          </option>
        </select>
      </div>
    </section>
  </main>
</template>
