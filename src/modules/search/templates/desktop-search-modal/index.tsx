import useToggleState from '@lib/hooks/use-toggle-state'
import { SEARCH_INDEX_NAME, searchClient } from '@lib/search-client'
import Modal from '@modules/common/components/modal'
import Search from '@modules/common/icons/search'
import DesktopHit from '@modules/search/components/desktop-hit'
import DesktopHits from '@modules/search/components/desktop-hits'
import SearchBox from '@modules/search/components/search-box'
import { InstantSearch } from 'react-instantsearch-hooks-web'

const DesktopSearchModal = () => {
  const { state, close, open } = useToggleState()

  return (
    <>
      <button className="flex items-center justify-center h-full flex-col gap-[6px] text-neutral-800" onClick={open}>
        <i className="ri-search-line text-[24px]"></i>
        <a className="text-xs">Cari</a>
      </button>

      <Modal close={close} isOpen={state} size="large">
        <Modal.Body>
          <InstantSearch indexName={SEARCH_INDEX_NAME} searchClient={searchClient}>
            <div className="flex flex-col h-full">
              <div className="w-full flex items-center gap-x-2 bg-gray-50 p-4">
                <Search />
                <SearchBox />
              </div>

              <div className="overflow-y-scroll flex-1 no-scrollbar mt-6">
                <DesktopHits hitComponent={DesktopHit} />
              </div>
            </div>
          </InstantSearch>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default DesktopSearchModal
