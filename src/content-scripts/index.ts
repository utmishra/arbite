import { linkedIn } from './linkedin'

chrome.action.onClicked.addListener(async tab => {
  const url = tab.url
  if (url && url.includes('linkedin')) {
    linkedIn()
  }
})
