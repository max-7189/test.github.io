// 追踪水果的函数
async function trackFruit() {
    const fruitID = document.getElementById('fruitID').value;
    const fruitStatusElement = document.getElementById('fruitStatus');

    try {
        const response = await axios.get(`http://127.0.0.1:5000/track?id=${fruitID}`);
        const data = response.data;
        fruitStatusElement.textContent = JSON.stringify(data, null, 4);
    } catch (error) {
        fruitStatusElement.textContent = 'Error: ' + error;
    }
}

// 更新水果状态的函数
async function updateFruitStatus() {
    const updateID = document.getElementById('updateID').value;
    const status = document.getElementById('status').value;
    const location = document.getElementById('location').value;
    const quality = document.getElementById('quality').value;
    const timestamp = document.getElementById('timestamp').value;

    const updateFeedbackElement = document.getElementById('updateFeedback');

    const payload = {
        id: updateID,
        status: status,
        location: location,
        quality: quality,
        timestamp: timestamp
    };

    try {
        const response = await axios.post('http://127.0.0.1:5000/update_status', payload);
        const message = response.data.message;
        updateFeedbackElement.textContent = message;
    } catch (error) {
        updateFeedbackElement.textContent = 'Error: ' + error;
    }
}

