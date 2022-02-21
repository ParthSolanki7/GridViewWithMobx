import React, { useCallback, useEffect, useState } from 'react'
import { PageHeader } from 'antd';
import GridComponent from './components/GridComponent';
import useStore from '../Store';
import InputComponent from '../CommonComponents/InputComponent';

const GridView = () => {
    const { GRID } = useStore()
    const [gridData, setGridData] = useState([])

    const handleChange = useCallback((order) => {
        var sortedData = []
        if (order === 'ascending') {
            sortedData = gridData.sort(function (a, b) {
                return a.price - b.price
            });
            setGridData([...sortedData])
        } else if (order === 'descending') {
            sortedData = gridData.sort(function (a, b) {
                return b.price - a.price
            });
            setGridData([...sortedData])
        }
    }, [gridData])

    useEffect(() => {
        GRID.getGtridData().then((data) => {
            if (data.length > 0) {
                data.forEach(ObjItem => {
                    ObjItem.description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`
                    ObjItem.content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
                })
            }
            setGridData(data)
        })
    }, [GRID])

    return (
        <>
            <PageHeader title="Grid View" className="site-page-header" />
            <div className='order-grid'>
                <InputComponent
                    type="select"
                    name="state"
                    label="Order"
                    placeholder="Select Order"
                    onChange={(e) => { handleChange(e) }}
                    options={{
                        data: [{ id: 'ascending', name: 'Ascending' }, { id: 'descending', name: 'Descending ' }],
                        value_key: 'id',
                        text_key: 'name'
                    }}
                />
            </div>
            {gridData && <GridComponent rowData={gridData} />}
        </>
    )
}

export default GridView