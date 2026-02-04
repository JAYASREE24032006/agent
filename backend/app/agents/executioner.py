class ExecutionerAgent:
    async def execute_global_logout(self, sio_server, user_id: str, reason: str):
        print(f"⚠️ EXECUTIONER: Executing Global Logout for {user_id}. Reason: {reason}")
        
        # Emit Logout Signal
        await sio_server.emit('LOGOUT_ALL', {
            'user_id': user_id,
            'reason': reason
        }, room=f"user_{user_id}")

executioner = ExecutionerAgent()
