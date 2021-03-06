/* bazecor-hardware-softhruf-splitography -- Bazecor SOFT/HRUF Splitography library
 * Copyright (C) 2019  Keyboard.io, Inc.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import Keymap from "./components/Keymap"
import { DFUProgrammer } from "@bazecor-api/flash"

const Splitography = {
  info: {
    vendor: "SOFT/HRUF",
    product: "Splitography",
    displayName: "Splitography",
    urls: [
      {
        name: "Homepage",
        url: "https://softhruf.love/collections/writers"
      }
    ]
  },
  usb: {
    vendorId: 0xfeed,
    productId: 0x6060
  },
  keyboard: {
    rows: 4,
    columns: 12
  },
  components: {
    keymap: Keymap
  },
  instructions: {
    en: {
      updateInstructions: `After clicking the Update button, reset your keyboard (by pressing the small
reset button beside the USB port) to put it into programmable mode, within ten
seconds.`
    },
    hu: {
      updateInstructions: `Miután megnyomta a Frissítés gombot, kérjük tegye a billentyűzetét programozható
módba (az USB port mellett található reset gombbal) tíz másodpercen belül.`
    }
  },

  flash: async (_, filename) => {
    return await DFUProgrammer(filename)
  }
}

export { Splitography }
