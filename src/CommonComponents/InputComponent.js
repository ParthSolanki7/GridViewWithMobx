import { InfoCircleOutlined, LoadingOutlined, PlusOutlined } from "@ant-design/icons"
import { Form, Input, Select, Tooltip, InputNumber, Upload } from "antd"

const InputComponent = ({ className, options, type, label, name, rules, tooltip, size, ...rest }) => {
	let inputSize = size ? size : 'large'
	let config = options || {}
	const getInput = () => {
		switch (type) {
			case 'upload':
				return (
					<Upload className={config.className} autoComplete="off" size={inputSize} {...rest} >
						{config.loading ? (
							<div>
								<LoadingOutlined />
								<div style={{ marginTop: 8 }}>{parseInt(config.loading)}%</div>
							</div>
						) : (config.imageUrl ? (
							<img className="image-content" src={config.imageUrl} alt="avatar" />
						) : (
							<div>
								<PlusOutlined />
								<div style={{ marginTop: 8 }}>{config.loading} Upload</div>
							</div>
						))}
					</Upload>
				)
			case 'textarea':
				return (<Input.TextArea className={config.className} autoComplete="off" size={inputSize} {...rest} />)
			case 'password':
				return (<Input.Password className={config.className} autoComplete="off" size={inputSize} {...rest} />)

			case 'number':
				return (<InputNumber className={config.className} autoComplete="off" size={inputSize} {...rest} />)

			case 'select':
				return (
					<Select className={config.className} autoComplete="off" size={inputSize} showSearch
						optionFilterProp="children"
						filterOption={(input, option) => option.children && option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
						{...rest}
					>
						{config && config.data && config.data.map((item, index) => {
							var value = config.value_key ? item[config.value_key] : item.value
							var text = config.text_key ? item[config.text_key] : item.text
							if (item) {
								if ((config.accepted_keys && config.accepted_keys.includes(value)) || (config.rejected_keys && !config.rejected_keys.includes(value)) || !config.rejected_keys) {
									return (
										<Select.Option key={index} value={value}>{text}</Select.Option>
									)
								}
							}
							return null
						})}
					</Select>
				)

			default:
				return (<Input className={config.className} autoComplete="off" size={inputSize} {...rest} />)
		}
	}
	return (
		<Form.Item className={className} label={label} required={(rules && rules.find(x => x.required)) ? true : false} hasFeedback>
			<Form.Item name={name} hasFeedback rules={rules}>
				{getInput()}
			</Form.Item>
			{tooltip && (<Tooltip title={tooltip}><InfoCircleOutlined /></Tooltip>)}
		</Form.Item>
	)
}

export default InputComponent
