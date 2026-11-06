const baseStyle = {
  padding: "6px 8px",
  borderRadius: 6,
  border: "1px solid",
  marginBottom: "12px",
};

const typeStyles = {
  success: { backgroundColor: "#d4edda", borderColor: "#28a745", color: "#155724" },
  warning: { backgroundColor: "#fff3cd", borderColor: "#ffc107", color: "#856404" },
  error: { backgroundColor: "#f8d7da", borderColor: "#dc3545", color: "#721c24" },
};

const AlertBox = ({type = 'sucess', message, children}) => {
    const style = { ...baseStyle, ...(typeStyles[type] || typeStyles.success) };
    return(
        <div role="alert"  style={style}>
            <p><strong>{message}</strong></p>
            {children && <div style={{marginTop:8}}>{children}</div>}

        </div>
    )

}

export default AlertBox