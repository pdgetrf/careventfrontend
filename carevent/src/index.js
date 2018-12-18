import dva from 'dva'
import 'antd/lib/button/style'
import createLoading from 'dva-loading'

import './index.css'
// 1. Initialize
const app = dva()

// 2. Plugins
app.use(createLoading())

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/event').default)
app.model(require('./models/images').default)
app.model(require('./models/login').default)

// 4. Router
app.router(require('./router').default)

// 5. Start
app.start('#root')
